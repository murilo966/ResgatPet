import '../style/style.css'

function Cabecalho2() {
    return(
        <div className="container-cabecalho2">
            <div className='bt-voltar'>
                <button><img src="./imagens/SetaEsquerda.png"/></button>
            </div>
            <div className='cabc2_vazio'></div>
            <img className='icon' src="./imagens/DogIcon.png" />
        </div>
    )
    
}

export default Cabecalho2