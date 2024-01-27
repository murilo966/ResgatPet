import { useEffect, useState } from 'react';
import MenuLateral from '../../components/menu-lateral';
import { Pets } from '../../types/pets';

function ResgatarPet() {

    const [pets, setPets] = useState<Pets[]>([])
    const carregarPets = () => {
        fetch("http://fakestoreapi.com/products/")
            .then((response) => {
                return response.json();
            })

            .then((json) => {
                setPets(json)
            })
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
                                {pets.map((item, index) => (
                                    <div className="produtos">
                                        <tr key={index}>
                                            <td> <img src={item.endereco} alt="" width={45}/> </td>     
                                            <td>{item.sexo}</td> 
                                            <td>{item.raca} </td>
                                        </tr>  
                                    </div>
                                ))}

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResgatarPet