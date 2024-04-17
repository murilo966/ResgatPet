import { createContext, ReactNode, useEffect, useState } from "react"

type ContextType ={
    id: string
    nome: string    
    email: string
    telefone: string
    level: string
    setID: (n:string) => void
    setNome: (n:string) => void
    setEmail: (n:string) => void
    setTelefone: (n:string) => void
    setLevel: (n:string) => void
}

export const UsuarioLogadoContext = createContext<ContextType | null>(null)

export const UsuarioLogadoProvider = ({children}: {children: ReactNode}) => {
    const[id, setID] = useState(
        () => {
            const storedID = localStorage.getItem('ContextID');
            return storedID ? storedID : "";  
        }
    )

    const[nome, setNome] = useState(
        () => {
            const storedNome = localStorage.getItem('ContextNome');
            return storedNome ? storedNome : "";
        }
    )
    
    const[email, setEmail] = useState(
        () => {            
            // LOCAL STORAGE PARA SALVAR A CHAVE DO EMAIL DO LOGIN
            const storedEmail = localStorage.getItem('ContextEmail');
            return storedEmail ? storedEmail : "";
        }
    )

    const[telefone, setTelefone] = useState(
        () => {
            const storedTelefone = localStorage.getItem('ContextTelefone');
            return storedTelefone ? storedTelefone : "";  
        }      
    )

    const[level, setLevel] = useState(
        () => {
            const storedLevel = localStorage.getItem('ContextLevel');
            return storedLevel ? storedLevel : "";  
        }       
    )

    // USER EFFECT PARA CARREGAR O EMAIL DO LOGIN
    useEffect(() => { 
        if(id){ 
            localStorage.setItem('ContextID', id);
        }

        if(nome){ 
            localStorage.setItem('ContextNome', nome);
        }

        if(email){ 
            localStorage.setItem('ContextEmail', email);
        }

        if(telefone){ 
            localStorage.setItem('ContextTelefone', telefone);
        }

        if(level){ 
            localStorage.setItem('ContextLevel', level);
        }
    }, [id,nome,email,telefone,level])

    return (
        <UsuarioLogadoContext.Provider value={{id, nome, email, telefone, level, setID, setNome, setEmail, setTelefone, setLevel}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}