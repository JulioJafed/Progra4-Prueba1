import React from 'react'
import '../css/headers.css'
import Logo from "../img/Logo.png"
const Headers = () => {
  return (
    <div>
      <h1 className='contener'>Personal Folder </h1>
      <img  src={Logo} alt='No found'></img>
    </div>
  )
}

export default Headers

