import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function TodoDetails({ route }) {

    const { todo } = route.params

    return (
        <View style={styles.pageHeight}>
            <View>
                
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
})