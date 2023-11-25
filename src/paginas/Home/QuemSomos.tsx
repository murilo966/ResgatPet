import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';

function QuemSomos(){
    return(
        <div>
            <Cabecalho/>
            <div className='container'>
                
                <div className='imagem'>
                    <img src="/imagens/DogIcon.png" className='imgleft'/>
                </div> 

                <div className='text2'> 
                    <p>
                        Somos um grupo de alunos do curso de desenvolvimento full stack do Senac Bauru 2023-2024, 
                        que, motivados pelo amor aos animais, decidimos desenvolver um site para auxiliar o resgate 
                        de animais em situação de rua e abandono.
                        <br/>
                        Acreditamos que todos os animais merecem ter uma vida digna, com amor e cuidados
                         ,por isso, criamos um espaço virtual que conecta ONGs e sociedade para o bem em comum.
                        <br/>
                        Nosso site é uma ferramenta que facilita o processo de resgate de animais,
                         ele permite que ONGs registrem os animais em situação de rua ou abandono, 
                         e que pessoas interessadas em adotar ou doar podem encontrar os animais que precisam de um lar.
                        <br/>
                   </p>
                </div>
                
                <div className='text2'>
                    <h1> Nossa missão </h1>
                    <p> 
                        Nossa missão é contribuir para a redução do número de animais em situação 
                        de rua e abandono, acreditamos que, com a união de esforços, podemos 
                        construir um mundo mais justo e amoroso para os animais.
                    </p>
                </div>

                <div className='text2'>
                    <h1> Nossos valores </h1>
                    <p >
                        <b> Amor: </b> amamos os animais e queremos o melhor para eles.
                        <br />
                        <b> Compaixão:</b> somos solidários aos animais que sofrem.
                        <br />
                        <b> Responsabilidade:</b> assumimos o compromisso de ajudar os animais.
                        <br />
                        <b> Cooperação:</b> trabalhamos juntos para alcançar nossos objetivos.
                        <br />
                    </p>
                </div>
                
                <div className='text2'><p ><h1>Como nos ajudar</h1></p>
                    <p>
                        Você pode nos ajudar de várias maneiras:
                        <br />
                        Adotando um animal do nosso site.
                        <br />
                        Doando para uma ONG que esteja cadastrada no nosso site.
                        <br />
                        Divulgando nosso site para que mais pessoas possam conhecer o nosso trabalho.
                        <br />
                        Obrigado por sua ajuda!
                    </p>
                </div>

                <div className='text2'>
                    <p><h1>Juntos, podemos fazer a diferença na vida dos animais!</h1></p>
                </div>
            </div>
            <Rodape/>
        </div>
    )
}

export default QuemSomos;
