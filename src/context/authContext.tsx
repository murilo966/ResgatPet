import { createContext, ReactNode, useEffect, useState } from "react"

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
    
    const[email, setEmail] = useState(
        () => {
            // LOCAL STORAGE PARA SALVAR A CHAVE DO EMAIL DO LOGIN
            const storedEmail = localStorage.getItem('ContextEmail')
            return storedEmail ? storedEmail : ''
        }
    )
    const[telefone, setTelefone] = useState('')
    const[level, setLevel] = useState('')

    // USER EFFECT PARA CARREGAR O EMAIL DO LOGIN
    useEffect(() => {
        if(email !== ''){
            localStorage.setItem('ContextEmail', email)
        }
    }, [email])

    return (
        <UsuarioLogadoContext.Provider value={{nome, email, telefone, level, setNome, setEmail, setTelefone, setLevel}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}