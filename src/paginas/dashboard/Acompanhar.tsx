import MenuLateral from '../../components/menu-lateral';
import { useContext, useEffect, useState } from 'react';
import { Pets } from '../../types/pets';
import { api } from '../../api';
import { UsuarioLogadoContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

function Acompanhar() {
    // CONTEXTO USUARIO
    const auth = useContext(UsuarioLogadoContext)
    const navigate = useNavigate()

    const [pets, setPets] = useState<Pets[]>([])
    const [loading,setloading] = useState(false)

    const carregarPets = async () => {
        setloading(true)
        const response = await api.CarregarTodosFormularios()
        setPets(response)
        console.log(response)
        setloading(false)
    }

    // USER EFFECT PARA INICIO IMEDIATO 
    useEffect(() => {
        // VERIFICAÇÃO DO LEVEL
        if (auth?.level === '2') {
            // REDIRECIONAR PARA DASHBOARD
            navigate('/dashboard')
        }
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
                                <tr className='carregarLista'>
                                {loading && 
                                    <div>Carregando...</div>
                                }
                                </tr>
                            </thead>

                            
                        {!loading &&
                            <tbody>
                                {pets.map((row, index) => {
                                    return (
                                        <tr key={index} className='tb-row'>
                                            <td className='endereco'>{row.ENDERECO}</td>
                                            <td className='cidade'>{row.CIDADE}</td>
                                            <td className='raca'>{row.RACA}</td>
                                            <td className='sexo'>{row.SEXO}</td>
                                            <td className='cor'>{row.COR}</td>
                                            <td className='saude'>{row.SAUDE}</td>
                                            <td className='acessorio'>{row.ACESSORIO}</td>
                                            <td className='status'><button>{row.STATUS}</button></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        }
                        </table>
                    </div>
                  </div>  
                
                
            </div>
        </div>
    )
}

export default Acompanhar;
