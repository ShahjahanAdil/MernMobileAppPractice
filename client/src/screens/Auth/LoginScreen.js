import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Loader from '../../components/Loader/Loader';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APP_HOST } from '@env';
import { useAuthContext } from '../../contexts/AuthContext';

const initialState = { email: "", password: "" }

export default function LoginScreen() {

    const { dispatch } = useAuthContext()
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation = useNavigation()

    const handleChange = (name, val) => setState(s => ({ ...s, [name]: val }))

    const handleSubmit = async () => {
        setLoading(true)

        const { email, password } = state

        if (!email || !password) {
            Alert.alert("Validation Error", "Please fill in all fields.");
            setLoading(false)
            return;
        }

        await axios.post(`${APP_HOST}auth/login`, { email, password })
            .then(async (res) => {
                const { status, data } = res
                if (status === 200) {
                    setState(initialState)
                    await AsyncStorage.setItem("jwt", data.token);
                    dispatch({ type: "SET_LOGGED_IN", payload: { user: data.user } })
                    setLoading(false)
                    navigation.navigate('Home')
                }
            })
            .catch(err => {
                console.error(err.message)
                setLoading(false)
            })
    }

    if (loading) {
        return <Loader />
    }

    return (
        <View style={styles.pageHeight}>
            <View style={styles.authContainer}>
                <View>
                    <Text style={{ color: '#0C82BD', textAlign: 'center', fontSize: 25, fontWeight: 600, marginBottom: 5 }}>LOGIN</Text>
                    <Text style={{ color: '#666', fontWeight: 500, paddingTop: 10, paddingBottom: 8 }}>Email:</Text>
                    <TextInput style={styles.authInput} placeholder="Enter your email" placeholderTextColor="#e7e7e7" cursorColor="#0C82BD" onChangeText={val => handleChange("email", val)} />
                    <Text style={{ color: '#666', fontWeight: 500, paddingTop: 10, paddingBottom: 8 }}>Password:</Text>
                    <TextInput style={styles.authInput} secureTextEntry={true} placeholder="Enter your password" placeholderTextColor="#e7e7e7" cursorColor="#0C82BD" onChangeText={val => handleChange("password", val)} />

                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 25 }}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            tintColors={{ true: '#0C82BD', false: '#e7e7e7' }}
                        />
                        <Text style={{ color: '#666' }}>Remember me</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.authButton} onPress={handleSubmit}>
                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 12 }}>LOGIN NOW</Text>
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
        paddingVertical: 10
    },
    authInput: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderWidth: 1,
        color: '#666',
        borderRadius: 8,
        borderColor: '#e7e7e7'
    }
})