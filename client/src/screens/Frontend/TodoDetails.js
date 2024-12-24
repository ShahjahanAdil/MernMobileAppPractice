import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';

export default function TodoDetails({ route }) {

    const { todo } = route.params

    const [state, setState] = useState({})
    const [selected, setSelected] = useState("")

    useEffect(() => {
        setState(todo)
    }, [])

    const data = [
        { key: '1', value: 'Pending' },
        { key: '2', value: 'Complete' }
    ]

    return (
        <View style={styles.pageHeight}>
            <View style={styles.todoEditBox}>
                <Text style={{ color: '#0c82bd', fontWeight: 600, fontSize: 20, textAlign: 'center', marginBottom: 12 }}>Edit Todo <FeatherIcon name='edit-2' size={20} color='#0c82bd' /></Text>
                <View style={{ gap: 10 }}>
                    <View>
                        <Text style={{ color: '#666', marginBottom: 5 }}>Title:</Text>
                        <TextInput style={styles.updateTodoInput} placeholder="Enter title" placeholderTextColor="#e7e7e7" cursorColor="#0C82BD" />
                    </View>
                    <View>
                        <Text style={{ color: '#666', marginBottom: 5 }}>Description:</Text>
                        <TextInput style={styles.updateTodoInput} placeholder="Enter description" placeholderTextColor="#e7e7e7" cursorColor="#0C82BD" />
                    </View>
                    <View>
                        <Text style={{ color: '#666', marginBottom: 5 }}>Status:</Text>
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save={selected}
                            boxStyles={{ paddingVertical: 8, paddingHorizontal: 10, borderRadius: 8, borderColor: '#e7e7e7' }}
                            inputStyles={{ color: '#888' }}
                            dropdownStyles={{ borderColor: '#e7e7e7' }}
                            dropdownTextStyles={{ color: '#666' }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.updateBtn}>
                        <Text style={{ color: '#fff' }}>Update <FeatherIcon name='edit-2' size={16} color='#fff' /></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageHeight: {
        flex: 1,
        backgroundColor: '#efefef',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    todoEditBox: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        elevation: 5,
    },
    updateTodoInput: {
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderWidth: 1,
        color: '#666',
        borderRadius: 8,
        borderColor: '#e7e7e7'
    },
    updateBtn: {
        paddingVertical: 8,
        paddingHorizontal: 18,
        backgroundColor: '#0c82bd',
        marginTop: 15,
        borderRadius: 8,
        elevation: 4
    }
})