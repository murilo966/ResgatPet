import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import Login from "../../paginas/autenticacao/Login"

export const RequireAuth = ({ children, level } : {children : JSX.Element, level: number}) =>{
    const auth = useContext(AuthContext)

    if(!auth.user){
        return <Login/>
    }

    if (auth.user.level === 0 && level === 0) {
        return children;
    } else if (auth.user.level <= 1 && level <= 1) {
        return children;
    } else if (auth.user.level === 2 && level === 2) {
        return children;
    }

    return children
} 