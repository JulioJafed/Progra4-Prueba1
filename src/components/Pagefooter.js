import React from 'react'
import '../css/footer.css'
import LogoFace from '../img/faceLogo.png'
import LogoGithub from '../img/logoGithub.png'
import LogoWhats from '../img/WhatsApp-logo.png'
const Pagefooter = () => {
  return (
    <div className="PageFooter">
      <footer>
        <h3 className="contact"> Telefono: 8888-8888</h3>
        <p className="parr"> juliojafed123@gmail.com</p>
        <p className="text4">Universidad Nacional De Costa Rica</p>
        {/*<h4 className="copy" >Copyright ® 2023 </h4>*/}

        <p> <a href='https://www.facebook.com/jafed.cabreraortega.5/'> <button className=' facebutton' type='button'>
          <img className='face' src={LogoFace} alt=' No foud' ></img>
        </button> </a> </p>

        <p> <a href='https://github.com/JulioJafed?tab=repositories'> <button className='gitHubbutton' type='button'>
          <img className='Githimg' src={LogoGithub} alt="No foud" ></img>
        </button> </a></p>

        <p> <a href='https://wa.link/ffcmnb'> <button className='ButtonWhatsApp' type='button'>
          <img className='Whatsimg' src={LogoWhats} alt="No foud" ></img>
        </button> </a></p>
        
      </footer>
    </div>
  )
}

export default Pagefooter