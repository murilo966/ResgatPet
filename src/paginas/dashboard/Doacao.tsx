import MenuLateral from "../../components/menu-lateral"
import FotoQrcode1 from "../../assents/imagens/card-apadrinhar/QrcodeTeste.png"
import FotoQrcode2 from "../../assents/imagens/card-apadrinhar/QrcodeTeste.png"

function Doacao() {
    return (
        <div className='container'>
            <div className='dashboard'>
                <MenuLateral />

                <div className="container-painel">
                    <div className="doacoes">

                        <h1>Contribua para o Nosso Site</h1>
                        <p>
                            Você se comove profundamente com os assuntos que abordamos em nosso site, não é mesmo? Cada palavra escrita, 
                            cada imagem compartilhada, tem o poder de tocar corações e inspirar mudanças significativas. Sua contribuição
                             não apenas apoia a continuidade desse importante trabalho, mas também é um gesto de solidariedade e empatia.
                        </p>
                        <div className="qr-codes">
                            <div className="qr-code">
                                <img src={FotoQrcode1} alt="QR Code 1" />
                                <p>André - Contribuição via Pix</p>
                            </div>
                            <div className="qr-code">
                                <img src={FotoQrcode2} alt="QR Code 2" />
                                <p>Murilo - Contribuição via Pix</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}

export default Doacao