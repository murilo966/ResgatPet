import MenuLateral from '../../components/menu-lateral';
import { useEffect, useState } from 'react';
import { Pets } from '../../types/pets';
import { api } from '../../api';

function Acompanhar() {

    const [pets, setPets] = useState<Pets[]>([])
    const carregarPets = async () => {
        const response = await api.CarregarTodosFormularios()
        setPets(response)
        console.log(response)
    }

    // USER EFFECT PARA INICIO IMEDIATO 
    useEffect(() => {
        // // VERIFICAÇÃO DE LEVEL DE ACESSO
        // if (levelOng) {
        //     // REDIRECIONAR PARA DASHBOARD
        //     navigate('/dashboard')
        // }

        carregarPets()
    }, [])

    return (
        <div className='container'>
            <div className='dashboard'>
                <MenuLateral />
                
                <div className='container-painel'>
                    <div className="tabelas">
                        <table>
                            <thead>
                                <tr className='tb-titulo'>
                                    <th colSpan={9}> Acompanhar</th>
                                </tr>
                                <tr className='tb-titulo'>
                                    <th colSpan={8}>
                                        <div className='tb-filtro'>
                                            <div>
                                                <select name="raca" >
                                                    <option value="">Raça</option>
                                                    <option value="">Poodle</option>
                                                    <option value="">Pitbull</option>
                                                    <option value="">Chow Chow</option>
                                                    <option value="">Bulldog</option>
                                                    <option value="">SRD</option>
                                                </select>
                                            </div>
                                            <div>
                                                <select name="sexo" >
                                                    <option value="">Sexo</option>
                                                    <option value="">Macho</option>
                                                    <option value="">Fêmea</option>
                                                </select>
                                            </div>
                                            <div>
                                                <input type="text" placeholder='O que você Procura ?' />
                                            </div>
                                            <div>
                                                <button >Procurar</button>
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                                <tr className='tb-cabecalho'>
                                    <th>ENDEREÇO</th>
                                    <th>CIDADE</th>
                                    <th>RAÇA</th>
                                    <th>SEXO</th>
                                    <th>COR</th>
                                    <th>SAUDE</th>
                                    <th>ACESSÓRIO</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                {pets.map((row, index) => {
                                    return (
                                        <tr key={index} className='tb-row'>
                                            <td className='endereco'>{row.endereco}</td>
                                            <td className='cidade'>{row.cidade}</td>
                                            <td className='raca'>{row.raca}</td>
                                            <td className='sexo'>{row.sexo}</td>
                                            <td className='cor'>{row.cor}</td>
                                            <td className='saude'>{row.saude}</td>
                                            <td className='acessorio'>{row.acessorio}</td>
                                            <td className='status'><button>Status</button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Acompanhar;
