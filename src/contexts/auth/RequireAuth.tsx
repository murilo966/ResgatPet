import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import Login from "../../paginas/autenticacao/Login"

export const RequireAuth = ({ children, level } : {children : JSX.Element, level: number}) =>{
    const auth = useContext(AuthContext)

    if(!auth.user){
        return <Login/>
    }
    
    console.log("Nível do Usuário:", auth.user.level);

    if (auth.user.level >= level) {
        return children;
    }

    return children
} 