export const api = {

    CarregarTodosFormularios: async () => {
        // const response = await fetch("https://resgat-pet-api.vercel.app/formulario")
        const response = await fetch("http://localhost:3005/formulario")
        let json = await response.json()
        return json
    },
    AdicionarFormulario: async (petFoto: string, petEndereco: string, petCidade: string, petRaca: string,
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
    }

}