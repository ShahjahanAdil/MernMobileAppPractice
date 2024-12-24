import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'

export default function ProfileDisplay() {

    const { user, handleLogout } = useAuthContext()

    return (
        <>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.pageHeight}>
                    <Text style={{ color: '#666' }}>Username: {user.username}</Text>
                    <Text style={{ color: '#666' }}>Email: {user.email}</Text>
                    <View>
                        <Pressable style={styles.logoutBtn} onPress={handleLogout}>
                            <Text style={{ color: '#fff' }}>Logout</Text>
                        </Pressable>
                    </View>
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
    logoutBtn: {
        backgroundColor: '#ff5757',
        marginTop: 15,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 8,
        elevation: 4
    }
})