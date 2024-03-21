import MenuLateral from "../../components/menu-lateral"
import LogoSuipa from "../../assents/imagens/ongs/ic_SUIPA.jpg";
import LogoArcadaFe from "../../assents/imagens/ongs/ic_ArcadaFe.jpg";
import LogoAbrigodaBorika from "../../assents/imagens/ongs/ic_AbrigodaBorika.jpg";

function Ongs() {
    return (
        <div className='container'>
            <div className='dashboard'>
                <MenuLateral />

                <div className='container-painel'>
                    <table className="tabelaOngs">
                        <tr>
                            <td className="imgTd"><img 
                            src={LogoSuipa}
                            width="100px" height="100px"/></td>
                            <td>
                                <h3>Ong de adoção SUIPA</h3>
                                <p>
                                    Sociedade União Internacional Protetora dos Animais
                                    Associação Civil Particular de Utilidade Pública
                                    Fundada em 1943
                                </p>

                            </td>
                            <td className="botaoTd"><a href="https://www.suipa.org.br/" target="_blank"><button>Saiba Mais</button></a></td>
                        </tr>
                        <br />
                        <tr>
                            <td className="imgTd">
                                <img
                                src={LogoArcadaFe}
                                width="100px" height="100px"/>
                            </td>
                            <td>
                                <h3>Ong de adoção Arca da Fé</h3>
                                <p>
                                Resgate de Animais, encaminhamento para adoção e recuperação de animais doentes, machucados, que necessitem de algum tipo de tratamento.
                                </p>
                                
                            </td>
                            <td className="botaoTd"><a href="https://web.facebook.com/ongarcadafe/?locale=pt_BR&_rdc=1&_rdr" target="_blank"><button>Saiba Mais</button></a></td>

                        </tr>
                        <br />
                        <tr>
                            <td className="imgTd"><img 
                            src={LogoAbrigodaBorika}
                            width="100px" height="100px"/></td>
                            <td>
                                <h3>Ong de adoção Abrigo da Borika</h3>
                                <p>
                                Nós do Abrigo da Borika Trabalhamos arduamente para salvar vidas. Recolhemos das ruas animais que estão atropelados ou muito debilitados.
                                </p>
                                
                            </td>
                            <td className="botaoTd"><a href="https://web.facebook.com/pageabrigodaborika/?_rdc=1&_rdr" target="_blank"><button>Saiba Mais</button></a></td>

                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Ongs