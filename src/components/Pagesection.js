import React from 'react'
import '../css/section.css'
import Foto from '../img/Foto.jpeg'
import Repo from '../img/Repo.png'
import Linke from '../img/Linkedi.png'
import Repositore from '../components/Repositorios'
const Pagesection = () => {



    return (

        <div className='center'>
            <h3 className='greet'> Hola Mundo <br></br>
                Mi nombre es Julio Jafed Cabrera
                <img className='person' src={Foto} alt='no found '></img><br />
                <h4> Estudiante De Ingenieria En Sistemas.</h4>
                <h5 className='frase'> "Aprender a programar es ser capaz de automatizar tus ideas" <br />- Katherine Kato</h5>
            </h3>

        <p><a href={Repositore} > <button className='Repobutt' type='button'>  Repositorios
                <img className='pngrepo' src={Repo} alt='No '></img>
            </button> </a></p> 

           



            <p> <a href='https://www.linkedin.com/in/julio-jafeth-cabrera-ortega-b25925274/'>
                <button className='Linkbutt' type='button'> Linkelin
                    <img className='pnglink' src={Linke} alt='No '></img>
                </button>
            </a>
            </p>
        </div>
    )
}

export default Pagesection