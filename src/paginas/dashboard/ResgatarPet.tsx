import { useEffect, useState } from 'react';
import MenuLateral from '../../components/menu-lateral';
import { Pets } from '../../types/pets';
import { Molde } from '../../types/molde';

function ResgatarPet() {

    const [pets, setPets] = useState<Molde[]>([])
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
                            {/* <table>
                            <tr>
                                <th>imagem</th>
                                <th>titulo</th>
                                <th>preço</th>
                                <th>categoria</th>
                            </tr>
                                {pets.map((item, index) => (
                                    <div className="produtos">
                                        <tr key={index}>
                                                <tr>
                                                    <td><img src={item.image} width="70px" height="70px" /></td>
                                                    <td>{item.title}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.category}</td>
                                                </tr>
                                        </tr>  
                                    </div>
                                ))}

                            </table> */}


                            <table>
                                <td>
                                    <th>Imagem</th>


                                    <tr><img src="https://acesse.dev/go9E4" width={70} /></tr>

                                </td>
                                <td>
                                    <th>Preço</th>


                                    <tr>20R$</tr>
                                </td>
                                <td>
                                    <th>Categoria</th>


                                    <tr>Masculino</tr>
                                </td>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResgatarPet