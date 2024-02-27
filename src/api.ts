export const api = {

    // LOGIN
    Logar: async (email: string, senha: string) => {
        // const response = await fetch("https://resgat-pet-api.vercel.app/usuarios/login" ,{
        const response = await fetch('http://localhost:3005/usuarios/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                senha: senha
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        let json = await response.json()
        return (json)
    },
    // CRIAR NOVA CONTA 
    CriarConta: async (nome: string, cpf_cnpj: string, telefone: string, email: string, senha: string, level: string) => {
        // const response = await fetch('https://resgat-pet-api.vercel.app/usuarios', {
        const response = await fetch('http://localhost:3005/usuarios', {
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                cpf_cnpj: cpf_cnpj,
                telefone: telefone,
                email: email,
                senha: senha,
                level: level
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        let json = await response.json()
        return (json)
    },
    // CARREGAR TODOS OS FORMULARIOS
    CarregarTodosFormularios: async () => {
        // const response = await fetch("https://resgat-pet-api.vercel.app/formulario")
        const response = await fetch("http://localhost:3005/formulario")
        let json = await response.json()
        return json
    },
    // NOVO FORMULARIO
    CriarFormulario: async (petFoto: string, petEndereco: string, petCidade: string, petRaca: string,
        petSexo: string, petCor: string, petSaude: string, petAcessorios: string, usuario?: string) => {
        // const response = await fetch('https://resgat-pet-api.vercel.app/formulario', {
        const response = await fetch('http://localhost:3005/formulario', {
            method: 'POST',
            body: JSON.stringify({
                fotoPet: petFoto,
                endereco: petEndereco,
                cidade: petCidade,
                raca: petRaca,
                sexo: petSexo,
                cor: petCor,
                saude: petSaude,
                acessorio: petAcessorios,
                usuario: usuario,
            }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });

        let json = await response.json()
        return (json)
    },
    UpdateImage: async (formData: FormData) => {
        let response = await fetch('http://localhost:3005/arquivos', {
            method: 'POST',
            body: formData
        });
        let json = await response.json()
        console.log(json)
        return json
    },
}