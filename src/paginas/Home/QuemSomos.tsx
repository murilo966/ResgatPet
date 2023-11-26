import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

function QuemSomos(){
    return(
        <div>
            <Cabecalho/>
            <div className='container'>
                
                <div className='logo'>
                    <img src="../../imagens/logo/DogIcon.png" />
                </div> 

                <div className='quem-somos'>
                    <div className='descricao-quem-somos'>
                        <label>
                            Somos um grupo de alunos do curso de desenvolvimento full stack do Senac Bauru 2023-2024, 
                            que, motivados pelo amor aos animais, decidimos desenvolver um site para auxiliar o resgate 
                            de animais em situação de rua e abandono. Acreditamos que todos os animais merecem ter uma vida digna, com amor e cuidados
                            ,por isso, criamos um espaço virtual que conecta ONGs e sociedade para o bem em comum.
                            <br/>
                            Nosso site é uma ferramenta que facilita o processo de resgate de animais,
                            ele permite que ONGs registrem os animais em situação de rua ou abandono, 
                            e que pessoas interessadas em adotar ou doar podem encontrar os animais que precisam de um lar.
                            <br/>
                        </label>
                    </div>
                </div>
                
                <div className='nossa-missao'>
                    <div className='titulo'>
                        <h2> Nossa missão </h2>
                    </div>
                    
                    <div className='descricao-nossa-missao'>
                        <label>
                            Nossa missão é contribuir para a redução do número de animais em situação 
                            de rua e abandono, acreditamos que, com a união de esforços, podemos 
                            construir um mundo mais justo e amoroso para os animais.
                        </label>
                    </div>
                </div>

                <div className='nossos-valores'>
                    <div className='titulo'>
                        <h2> Nossos valores </h2>
                    </div>
                    <div className='descricao-nossos-valores'>
                        <label>
                            <b> Amor: </b> amamos os animais e queremos o melhor para eles.
                            <br />
                            <b> Compaixão:</b> somos solidários aos animais que sofrem.
                            <br />
                            <b> Responsabilidade:</b> assumimos o compromisso de ajudar os animais.
                            <br />
                            <b> Cooperação:</b> trabalhamos juntos para alcançar nossos objetivos.
                            <br />
                        </label>
                    </div>
                </div>
                
                <div className='como-ajudar'>
                    <div className='titulo'>
                        <h2>Como nos ajudar</h2>
                    </div>
                    <div className='descricao-como-ajudar'>
                        <label>
                            Você pode nos ajudar de várias maneiras:
                            <br />
                            1- Adotando um animal do nosso site.
                            <br />
                            2- Doando para uma ONG que esteja cadastrada no nosso site.
                            <br />
                            3- Divulgando nosso site para que mais pessoas possam conhecer o nosso trabalho.
                            <br />
                            <p>Obrigado por sua ajuda! ♥</p>
                        </label>
                    </div>
                </div>

                <div className='ditado'>
                    <p>Juntos, podemos fazer a diferença na vida dos animais!</p>
                </div>
            </div>
            <Rodape/>
        </div>
    )
}

export default QuemSomos;
