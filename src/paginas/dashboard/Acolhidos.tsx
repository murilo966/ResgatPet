import { useContext } from "react";
import MenuLateral from "../../components/menu-lateral"
import { Link } from "react-router-dom"
import { UsuarioLogadoContext } from "../../context/authContext";
import '../../App.css'



function Acolhidos() {
    const auth = useContext(UsuarioLogadoContext)
    // NIVEL DE ACESSO
    const levelUsuario = auth?.level === '0' || auth?.level === '1';
    const levelOng = auth?.level === '0' || auth?.level === '2';

    return (
        <div className='container'>
     
            <div className='dashboard'>
      
                <MenuLateral />


             

                <div className='container-painel'>
                    <div className="todosCards">
                        <div className="cardAcolhidos">
                            <img
                            src="https://www.rbsdirect.com.br/imagesrc/35519608.jpg?w=700"/>
                            <h1>Cachorro tuco</h1>
                            <p>Tuco foi adotado pela andressa no bairro de santa maria em bauru no dia 15/02 com o nosso auxílio e a ajuda da ONG FUIPA 
                                para tratamento do doguinho</p>
                            <div/>
                        </div>
                        <div className="cardAcolhidos">
                            <img src="data:image/jpeg;base64,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"/>
                            <h1>Gata jade</h1>
                            <p>A jade foi adotada no bairro do Mary Dotta em bauru no dia 28/02 com nosso auxílio e a ajuda da ONG Arca da Fé para resgate</p>
                            <div/>
                        </div>
                        <div className="cardAcolhidos">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3cvXA04o1dbhGRr-JyzCxGDaphAo6zJRIIg&usqp=CAU"/>
                            <h1>Papagaio Loro</h1>
                            <p>O loro foi muito bem recebido e cuidado em sua nova casa devido aos cuidados
                                 de Lurdes, que contribuiu para o resgate direto no bairro em que morava, e acabou o adotando</p>
                            <div/>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Acolhidos