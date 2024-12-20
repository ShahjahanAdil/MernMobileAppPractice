import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.pageHeight}>
            <Text style={{ color: '#111', fontWeight: '600' }}>About</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')}>
                <Text style={{ color: '#fff' }}>Go to contact</Text>
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