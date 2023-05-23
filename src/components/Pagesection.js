import React from 'react'

import '../css/section.css'
import Foto from '../img/Foto.jpeg'
import Foto2 from '../img/Carru1.jpeg'
import Typewriter from 'typewriter-effect';
import Linke from '../img/Linkedi.png'
//import Repositore from '../Repositorios'
const Pagesection = () => {
    return (
        <>
        <div className='center'>
            <h3 className='greet'> Hola Mundo <br></br>
                Mi nombre es Julio Jafed Cabrera
                <img className='person' src={Foto} alt='no found '></img><br />
                <h4> Estudiante De Ingenieria En Sistemas.</h4>
                <h5 className='frase'> "Aprender a programar es ser capaz de automatizar tus ideas" <br />- Katherine Kato</h5>
            </h3>

        {/*<p><a href="../Repositorios.js" > <button className='Repobutt' type='button'>  Repositorios
                <img className='pngrepo' src={Repo} alt='No '></img>
            </button> </a></p> 
    */}
            <p> <a href='https://www.linkedin.com/in/julio-jafeth-cabrera-ortega-b25925274/'>
                <button className='Linkbutt' type='button'> Linkelin
                    <img className='pnglink' src={Linke} alt='No '></img>
                </button>
            </a>
            </p>
        </div>

        
            <div className='center2'>
                <h1 className='text-center text-2xl font-mono text-purple-600'> Informacion personal </h1>
                <h2 className='text-xl font-mono text-indigo-400'>Correo: julio.cabrera.ortega@una.ac.cr</h2>
                <h2 className='text-xl font-mono text-indigo-400'>Telefono: 8888-8888</h2> 
                <img src={Foto2} alt="Not found"></img>
                {/*para hacer que escriba solo  en el h4 
                Corremos en consola   npm install typewriter-effect y despues se llama ejemplo fila 6*/}
                <h4 className='MovingText text-lg text-purple-400'>
                <Typewriter
                    options={{
                        strings: [
                            "Estudiante de Ingenireia en Sistemas.",
                            "The main objective is not to give up."
                        ],
                        //autoStart: 3,
                        autoStart: true,
                        loop: true,
                        delay: 40,
                    }} />
            </h4>
            </div>
        </>
    )
}

export default Pagesection