import { createContext, ReactNode, useState } from "react"

type ContextType ={
    nome: string    
    email: string
    telefone: string
    level: string
    setNome: (n:string) => void
    setEmail: (n:string) => void
    setTelefone: (n:string) => void
    setLevel: (n:string) => void
}

export const UsuarioLogadoContext = createContext<ContextType | null>(null)
export const UsuarioLogadoProvider = ({children}: {children: ReactNode}) => {
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[telefone, setTelefone] = useState('')
    const[level, setLevel] = useState('')

    return (
        <UsuarioLogadoContext.Provider value={{nome, email, telefone, level, setNome, setEmail, setTelefone, setLevel}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}

// import { createContext } from "react";
// import { User } from "../../types/user";

// export type UsuarioLogadoContext ={
//     user: User | null
//     signin: (email: string, password: string) => Promise<boolean>
//     signout: () => void 
// }

// export const AuthContext = createContext<UsuarioLogadoContext>(null!);