import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import { useAuthContext } from '../../contexts/AuthContext';

export default function TodosScreen({ navigation }) {

    const { isAuthenticated } = useAuthContext()

    const handleOnPress = (screenPath) => {
        if (!isAuthenticated) {
            navigation.navigate('Login')
        }
        else {
            navigation.navigate(screenPath)
        }
    }

    return (
        <View style={styles.pageHeight}>
            {
                !isAuthenticated &&
                <View style={styles.loginError}>
                    <Text style={{ color: '#666', textAlign: 'center' }}>Please login to your account before continuing!</Text>
                </View>
            }

            <View style={styles.todosView}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Todos Manager</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, marginTop: 12 }}>
                    <TouchableOpacity style={styles.createButton} onPress={() => handleOnPress('CreateTodo')}>
                        <Text style={{ color: '#fff', fontWeight: 500 }}>Create <EntypoIcon name='plus' size={16} color='#fff' /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.createButton} onPress={() => handleOnPress('AllTodos')}>
                        <Text style={{ color: '#fff', fontWeight: 500 }}>Manage <FeatherIcon name='edit-2' size={16} color='#fff' /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageHeight: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        gap: 15
    },
    button: {
        backgroundColor: '#0C82BD',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginTop: 30,
        elevation: 5
    },
    loginError: {
        width: '100%',
        padding: 5,
        borderWidth: 1,
        borderColor: '#ff9c9c',
        borderRadius: 8,
        backgroundColor: '#ffdfdf'
    },
    todosView: {
        width: '100%',
        backgroundColor: '#0c82bd',
        padding: 10,
        borderRadius: 8,
        elevation: 5
    },
    createButton: {
        borderWidth: 1,
        borderColor: '#fff',
        borderStyle: 'solid',
        backgroundColor: '#0c82bd',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        elevation: 3
    },
})