import React, { createContext, useContext, useReducer } from 'react'

const AuthContext = createContext()

const initialState = { isAuthenticated: false, user: {} }

const reducer = (state, { type }) => {
    switch (type) {
        case "SET_LOGGED_IN":
            return { isAuthenticated: true, user: payload.user }
        case "SET_PROFILE":
            return { isAuthenticated: true, user: payload.user }
        case "SET_LOGGED_OUT":
            return { ...initialState }
        default:
            return state
    }
}

export default function AuthContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [loading, setLoading] = useState(true)

    return (
        <AuthContext.Provider value={{ ...state, dispatch, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)