import React, { createContext, useContext, useEffect, useState } from 'react'

export const UserContext = createContext(null)
export const UserProvider = ({children}) => {

    let [modo,setModo] = useState(()=>{
        const savedModo=localStorage.getItem('modo')
        return savedModo || 'light'
    });
    useEffect(()=>{
        localStorage.setItem('modo', modo);
    },[modo])

    const cambiarModo=()=>{
        setModo(modo => (modo ==='light' ? 'dark':'light'))
    }
    return (
        <UserContext.Provider value={{modo,cambiarModo}}>{children}</UserContext.Provider>
    )
}
export const useModo =()=>{
    return useContext(UserContext)
}