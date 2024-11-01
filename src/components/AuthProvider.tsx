import React, { createContext, FC, useState } from "react";

interface IAuthProviderProps {
    children: React.ReactNode;
}

export interface ICurrentUser {
    id: number;
    email: string;
}

interface IAuthContext {
    user: ICurrentUser | null,
    setUser: Function
}

export const AuthContext = createContext<IAuthContext | null>(null)

const AuthProvider: FC<IAuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<ICurrentUser | null>(null);


    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider