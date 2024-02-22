import { createContext, ReactNode, useState } from "react"

type ContextType ={
    nome: string
    email: string
    setNome: (n:string) => void
    setEmail: (n:string) => void

    /* 
        criar o level de acesso ONG e Usuario
        criar nome endereço e telefone do retorno do login
    */
}

export const UsuarioLogadoContext = createContext<ContextType | null>(null)
export const UsuarioLogadoProvider = ({children}: {children: ReactNode}) => {
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')

    return (
        <UsuarioLogadoContext.Provider value={{nome, email, setNome, setEmail}}>
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