import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';

export default function TodosScreen({ navigation }) {
    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.pageHeight}>
                    <View style={styles.todosView}>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Todos Manager</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10, marginTop: 12 }}>
                            <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('CreateTodo')}>
                                <Text style={{ color: '#fff', fontWeight: 500 }}>Create <EntypoIcon name='plus' size={16} color='#fff' /></Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('AllTodos')}>
                                <Text style={{ color: '#fff', fontWeight: 500 }}>Manage <FeatherIcon name='edit-2' size={16} color='#fff' /></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    pageHeight: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    button: {
        backgroundColor: '#0C82BD',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginTop: 30,
        elevation: 5
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