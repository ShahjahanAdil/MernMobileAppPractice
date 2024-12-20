import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function ContactScreen({ navigation }) {
    return (
        <View style={styles.pageHeight}>
            <Text style={{ color: '#111', fontWeight: '600' }}>Contact</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={{ color: '#fff' }}>Go to home</Text>
            </TouchableOpacity>
        </View>
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