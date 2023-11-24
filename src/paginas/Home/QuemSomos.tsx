import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

function QuemSomos(){
    return(
        <div>
            <Cabecalho/>
            <div className='container'>
                
                <div className='imagem'>
                <img src="/imagens/DogIcon.png" className='imgleft'/>
                <div className='titulo1'><label>Quem Somos</label> </div>
                </div>
                
                  

                <div className='text2'> 
                    <div ><p  >Somos um grupo de alunos do curso de desenvolvimento full stack do Senac Bauru 2023-2024, que, motivados pelo amor aos animais, decidimos desenvolver um site para auxiliar o resgate de animais em situação de rua e abandono.  </p></div>
                <p  >Acreditamos que todos os animais merecem ter uma vida digna, com amor e cuidados ,por isso, criamos um espaço virtual que conecta ONGs e sociedade para o bem em comum. </p>
                <p  >Nosso site é uma ferramenta que facilita o processo de resgate de animais, ele permite que ONGs registrem os animais em situação de rua ou abandono, e que pessoas interessadas em adotar ou doar podem encontrar os animais que precisam de um lar.</p><br/>
                </div>

                <div className='text2'><p ><h1 >Nossa missão</h1></p>
                <p > Nossa missão é contribuir para a redução do número de animais em situação de rua e abandono, acreditamos que, com a união de esforços, podemos construir um mundo mais justo e amoroso para os animais.</p><br/>
                </div>

                <div className='text2'>
                 <p ><h1>Nossos valores</h1></p>
                <p >Amor: amamos os animais e queremos o melhor para eles.</p>
                <p >Compaixão: somos solidários aos animais que sofrem.</p>
                <p >Responsabilidade: assumimos o compromisso de ajudar os animais.</p>
                <p >Cooperação: trabalhamos juntos para alcançar nossos objetivos.</p><br/>
                </div>
                
                <div className='text2'><p ><h1>Como nos ajudar</h1></p>
                <p >Você pode nos ajudar de várias maneiras:</p>
                <p >Adotando um animal do nosso site.</p>
                <p >Doando para uma ONG que esteja cadastrada no nosso site.</p>
                <p >Divulgando nosso site para que mais pessoas possam conhecer o nosso trabalho.</p>
                <p >Obrigado por sua ajuda!</p><br/>
                </div>

                <div className='text2'><p><h1>Juntos, podemos fazer a diferença na vida dos animais!</h1></p></div>
            </div>
            <Rodape/>
        </div>
    )
}

export default QuemSomos;