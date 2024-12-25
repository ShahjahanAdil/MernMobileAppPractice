import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import { APP_HOST } from '@env';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';

export default function AllTodo({ navigation }) {

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchTodos = () => {
            setLoading(true)

            axios.get(`${APP_HOST}todos/all`)
                .then(res => {
                    const { status, data } = res
                    if (status === 200) {
                        setTodos(data.todos)
                        setLoading(false)
                    }
                })
                .catch(err => {
                    console.error("Todo fetching error frontend", err)
                    setLoading(false)
                })
        }
        fetchTodos()
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.pageHeight}>
                    <View>
                        <Text style={{ color: '#666', fontSize: 16, fontWeight: 600, marginTop: 5, marginBottom: 12 }}>Manage all your todos here:</Text>
                    </View>
                    {
                        todos.map(todo => {
                            return (
                                <View style={styles.todoBox} key={todo.todoId}>
                                    <View style={styles.todoBoxTop}>
                                        <Text style={{ color: '#666', fontWeight: 600 }}>{todo.title}</Text>
                                    </View>
                                    <View style={styles.todoBoxMid}>
                                        <Text style={{ color: '#888' }}>{todo.description}</Text>
                                    </View>
                                    <View style={styles.todoBoxBottom}>
                                        <View style={{ flex: 1, alignItems: 'center', borderRightWidth: 1, borderColor: '#666' }}>
                                            <TouchableOpacity onPress={() => navigation.navigate('TodoDetails', { todo })}>
                                                <FeatherIcon name='edit-2' size={16} color='#0c82bd' />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 1, alignItems: 'center' }}>
                                            <TouchableOpacity>
                                                <FeatherIcon name='trash' size={16} color='#ff3131' />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    pageHeight: {
        flex: 1,
        backgroundColor: '#efefef',
        padding: 10
    },
    todoBox: {
        width: '100%',
        backgroundColor: '#fff',
        elevation: 5,
        marginBottom: 15,
        borderRadius: 8
    },
    todoBoxTop: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomColor: '#d1d1d1',
        borderBottomWidth: 1,
        padding: 10
    },
    todoBoxMid: {
        minHeight: 70,
        maxHeight: 70,
        padding: 10,
        overflow: 'hidden'
    },
    todoBoxBottom: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#3d3d3d',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    }
})