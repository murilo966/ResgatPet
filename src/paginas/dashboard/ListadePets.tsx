import MenuLateral from "../../components/menu-lateral"

function ListadePets() {
    return (
        <div className='container'>
            <div className='dashboard'>
                <MenuLateral />

                <div className='container-painel'>
                    <div>
                        <img 
                        src="https://www.rbsdirect.com.br/imagesrc/35519608.jpg?w=700  "
                        width= "250px" height="250px"/>

                        <h1>Cachorro tuco</h1>

                        <p>Tuco foi adotado pela andressa no bairro de santa maria em bauru no dia 15/02 com o nosso auxílio e a ajuda da ONG FUIPA para tratamento do doguinho</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListadePets