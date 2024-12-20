import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'

const initialState = { username: "", email: "", password: "" }
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function SignUpScreen() {

    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const handleChange = (name, val) => setState(s => ({ ...s, [name]: val }))

    const handleSubmit = async () => {
        setLoading(true)

        const { username, email, password } = state

        if (username.trim().length < 3) {
            Alert.alert("Invalid Username", "Username must be at least 3 characters long!");
            setLoading(false);
            return;
        }
        if (!isValidEmail(email)) {
            Alert.alert("Invalid Email", "Please enter a valid email address!");
            setLoading(false);
            return;
        }
        if (password.trim().length < 6) {
            Alert.alert("Invalid Password", "Password must be at least 6 characters long!");
            setLoading(false);
            return;
        }

        await axios.post(`${process.env.APP_HOST}/auth/register`, { username, email, password })
            .then((res) => {
                const { status } = res
                if (status === 201) {
                    // Alert.alert("User registered!", res.data.message)
                    setState(initialState)
                    setLoading(false)
                }
            })
            .catch((err) => {
                console.error(err.message);
                Alert.alert("Registration Error", "An error occurred during registration. Please try again!");
                setLoading(false);
            })
    }

    if (loading) {
        return <Loader />
    }

    return (
        <View style={styles.pageHeight}>
            <View style={styles.authContainer}>
                <View>
                    <Text style={{ color: '#0C82BD', textAlign: 'center', fontSize: 25, fontWeight: 600, marginBottom: 5 }}>SIGNUP</Text>
                    <Text style={{ color: '#666', fontWeight: 500, paddingTop: 10, paddingBottom: 8 }}><Text style={{ color: '#0C82BD' }}>*</Text> Username:</Text>
                    <TextInput style={styles.authInput} placeholder="Enter your username" placeholderTextColor="#e7e7e7" cursorColor="#0C82BD" onChangeText={val => handleChange("username", val)} />
                    <Text style={{ color: '#666', fontWeight: 500, paddingTop: 10, paddingBottom: 8 }}><Text style={{ color: '#0C82BD' }}>*</Text> Email:</Text>
                    <TextInput style={styles.authInput} placeholder="Enter your email" placeholderTextColor="#e7e7e7" cursorColor="#0C82BD" onChangeText={val => handleChange("email", val)} />
                    <Text style={{ color: '#666', fontWeight: 500, paddingTop: 10, paddingBottom: 8 }}><Text style={{ color: '#0C82BD' }}>*</Text> Password:</Text>
                    <TextInput style={styles.authInput} secureTextEntry={true} placeholder="Enter your password" placeholderTextColor="#e7e7e7" cursorColor="#0C82BD" onChangeText={val => handleChange("password", val)} />
                </View>

                <TouchableOpacity style={styles.authButton} onPress={handleSubmit}>
                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 12 }}>SIGNUP NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageHeight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 30
    },
    authContainer: {
        borderColor: '#e7e7e7',
        borderWidth: 1,
        borderRadius: 8,
        width: '100%',
        minHeight: 280,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    authButton: {
        backgroundColor: '#0C82BD',
        width: '100%',
        borderRadius: 8,
        paddingVertical: 10,
        marginTop: 30
    },
    authInput: {
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderWidth: 1,
        color: '#666',
        borderRadius: 8,
        borderColor: '#e7e7e7'
    }
})