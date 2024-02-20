import { createContext, ReactNode, useState } from "react"

type ContextType ={
    nome: string
    setName: (n:string) => void
}

export const UsuarioLogadoContext = createContext<ContextType | null>(null)
export const UsuarioLogadoProvider = ({children}: {children: ReactNode}) => {
    const[nome, setName] = useState('')

    return (
        <UsuarioLogadoContext.Provider value={{nome, setName}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}

// import { createContext } from "react";
// import { User } from "../../types/user";

// export type AuthContextType ={
//     user: User | null
//     signin: (email: string, password: string) => Promise<boolean>
//     signout: () => void 
// }

// export const AuthContext = createContext<AuthContextType>(null!);