import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import AuthDisplay from '../../components/AuthDisplay/AuthDisplay'
import ProfileDisplay from '../../components/ProfileDisplay/ProfileDisplay'

export default function ProfileScreen() {

    const { user } = useAuthContext()

    return (
        <>
            {
                !user.email ?
                    <AuthDisplay /> :
                    <ProfileDisplay />
            }
        </>
    )
}