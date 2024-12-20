import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function TodosScreen() {
    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.pageHeight}>
                    <Text style={{ color: '#111' }}>Todos</Text>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    pageHeight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#0C82BD',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginTop: 30,
        elevation: 5
    }
})