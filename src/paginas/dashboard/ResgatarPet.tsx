import { useEffect, useState } from 'react';
import MenuLateral from '../../components/menu-lateral';
import { Pets } from '../../types/pets';

function ResgatarPet() {

    const [pets, setPets] = useState<Pets[]>([])
    const carregarPets = () => {
        fetch("http://localhost:3005/formulario")
            .then((response) => {
                return response.json();
            })

            .then((json) => {
                setPets(json)
            })

            .catch((error) => {
                console.error('Erro ao carregar pets:', error);
            });
    }

    useEffect(() => {
        carregarPets()
    }, []);

    return (
        <div>
            <div className='container'>
                <div className='dashboard'>
                    <MenuLateral />

                    <div className='container-painel'>
                        <h1>Resgatar Pet</h1>

                        <div className="tabelas">
                            <table>                                                                
                                <thead>
                                    <tr>
                                        <th colSpan={8}> Tabela De Pets</th>
                                    </tr> 
                                    <tr>
                                        <th>ENDEREÇO</th>
                                        <th>CIDADE</th>
                                        <th>RAÇA</th>
                                        <th>SEXO</th>
                                        <th>COR</th>
                                        <th>SAUDE</th>
                                        <th>ACESSÓRIO</th>                                        
                                        <th>USUARIO</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {pets.map((row, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{row.endereco}</td>
                                                <td>{row.cidade}</td>
                                                <td>{row.raca}</td>
                                                <td>{row.sexo}</td>
                                                <td>{row.cor}</td>
                                                <td>{row.saude}</td>
                                                <td>{row.acessorio}</td>                                                
                                                <td>{row.usuario}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResgatarPet