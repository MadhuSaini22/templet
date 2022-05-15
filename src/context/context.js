import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    const [selectedSource, setSelectedSource] = useState('');
    const [selectDestination, setSelectedDestination] = useState('');
    // console.log({ selectedSource });
    // console.log({ selectDestination });
    return (
        <AuthContext.Provider value={{ selectedSource, setSelectedSource, selectDestination, setSelectedDestination }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext