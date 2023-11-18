import Cabecalho from '../components/cabecalho';
import Rodape from '../components/rodape';
import Cabecalho2 from '../components/cabecalho2';

function QuemSomos(){
    return(
        <div>
            <Cabecalho2/>
            <div className='container'>
                <p>QUEM SOMOS</p>
                <div className='imagem'>
                <img src="/DogIcon.png" className='imgleft'/>
                <div className='div-img1'> <h1 >Quem Somos </h1></div>
                                    
      
            
                </div>

                <div> <p className='text2'><h4>Somos um grupo de alunos do curso de desenvolvimento full stack do Senac Bauru 2023-2024, que, motivados pelo amor aos animais, decidimos desenvolver um site para auxiliar o resgate de animais em situação de rua e abandono.  </h4></p></div>
                <p className='text2'>Acreditamos que todos os animais merecem ter uma vida digna, com amor e cuidados. Por isso, criamos um espaço virtual que conecta ONGs e sociedade para o bem em comum. </p>
                <p className='text2'>Nosso site é uma ferramenta que facilita o processo de resgate de animais. Ele permite que ONGs registrem os animais em situação de rua ou abandono, e que pessoas interessadas em adotar ou doar podem encontrar os animais que precisam de um lar.</p>
                <p className='text2'><h1>Nossa missão</h1></p>
                <p className='text2'> Nossa missão é contribuir para a redução do número de animais em situação de rua e abandono. Acreditamos que, com a união de esforços, podemos construir um mundo mais justo e amoroso para os animais.</p>
                <p className='text2'><h1>Nossos valores</h1></p>
                <p className='text2'>Amor: amamos os animais e queremos o melhor para eles.</p>
                <p className='text2'>Compaixão: somos solidários aos animais que sofrem.</p>
                <p className='text2'>Responsabilidade: assumimos o compromisso de ajudar os animais.</p>
                <p className='text2'>Cooperação: trabalhamos juntos para alcançar nossos objetivos.</p>
                <p className='text2'><h1>Como nos ajudar</h1></p>
                <p className='text2'>Você pode nos ajudar de várias maneiras:</p>
                <p className='text2'>Adotando um animal do nosso site.</p>
                <p className='text2'>Doando para uma ONG que esteja cadastrada no nosso site.</p>
                <p className='text2'>Divulgando nosso site para que mais pessoas possam conhecer o nosso trabalho.</p>
                <p className='text2'>Obrigado por sua ajuda!</p>
                <p className='text2'><h2>Juntos, podemos fazer a diferença na vida dos animais.</h2></p>
            </div>
            <Rodape/>
        </div>
    )
}

export default QuemSomos