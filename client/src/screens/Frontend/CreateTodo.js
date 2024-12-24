import React from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import EntypoIcon from 'react-native-vector-icons/dist/Entypo';

export default function CreateTodo() {
    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.pageHeight}>
                    <View style={styles.createTodoContainer}>
                        <Text style={{ color: '#0c82bd', fontSize: 20, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' }}>Create Todo</Text>
                        <View style={{ gap: 10 }}>
                            <View>
                                <Text style={{ color: '#666', marginBottom: 5 }}>Title:</Text>
                                <TextInput style={styles.createTodoInput} placeholder="Enter title" placeholderTextColor="#e7e7e7" cursorColor="#0C82BD" />
                            </View>
                            <View>
                                <Text style={{ color: '#666', marginBottom: 5 }}>Description:</Text>
                                <TextInput style={styles.createTodoInput} placeholder="Enter description" placeholderTextColor="#e7e7e7" cursorColor="#0C82BD" />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.createBtn}>
                                <Text style={{ color: '#fff' }}>Create <EntypoIcon name='plus' size={16} color='#fff' /></Text>
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
    createTodoContainer: {
        width: '100%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e7e7e7',
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 4
    },
    createTodoInput: {
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderWidth: 1,
        color: '#666',
        borderRadius: 8,
        borderColor: '#e7e7e7'
    },
    createBtn: {
        paddingVertical: 8,
        paddingHorizontal: 18,
        backgroundColor: '#0c82bd',
        marginTop: 15,
        borderRadius: 8,
        elevation: 4
    }
})