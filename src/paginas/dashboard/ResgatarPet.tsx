import MenuLateral from '../../components/menu-lateral';
import { useContext, useEffect, useState } from 'react';
import { Pets } from '../../types/pets';
import { api } from '../../api';
import { UsuarioLogadoContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

function ResgatarPet() {

    // CONTEXTO USUARIO
    const auth = useContext(UsuarioLogadoContext)
    const navigate = useNavigate()

    const [pets, setPets] = useState<Pets[]>([])
    const carregarPets = async () => {
        let json = await api.CarregarTodosFormularios()
        setPets(json)
    }

    // USER EFFECT PARA INICIO IMEDIATO 
    useEffect(() => {
        // VERIFICAÇÃO DO LEVEL
        if (auth?.level === '1') {
            // REDIRECIONAR PARA DASHBOARD
            navigate('/dashboard')
        }

        carregarPets()
    }, [])

    return (
        <div>
            <div className='container'>
                <div className='dashboard'>
                    <MenuLateral />

                    <div className='container-painel'>
                        <div className="tabelas">
                            <table>
                                <thead>
                                    <tr className='tb-titulo'>
                                        <th colSpan={9}> Tabela De Pets</th>
                                    </tr>
                                    <tr className='tb-titulo'>
                                        <th colSpan={9}>
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
                                        <th>USUARIO</th>
                                        <th></th>
                                    </tr>
                                </thead>

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
                                                <td className='usuario'>{auth?.nome}</td>
                                                <td className='bt-acolher'><button>Acolher</button></td>
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