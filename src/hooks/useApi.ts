import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const userAPI = () => ({
    validateToken: async (token: string) => {
        return{
            user: {
                id: 3,
                name: 'Andre',
                email: 'andre@gmail.com'        
            }
        };
        const response = await api.post('/validate', {token})
        return response.data
    },
    signin: async (email: string, senha: string) =>{
        return{
            user: {
                id: 3,
                name: 'Andre',
                email: 'andre@gmail.com'        
            },
            token: '123456789'
        };
        const response = await api.post('singin', {email, senha})
        return response.data
    },
    logout: async () => {
        return { status: true}
        const response = await api.post('/logout')
        return response.data
    }
})