import React from 'react'
import "../styles/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUser } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <>
    <header className='header-container'>
      <div className='header-content'>
      <button className='ham-btn'>
         <FontAwesomeIcon icon={faBars} size="lg" />
         <span class>Menu</span>
      </button>
      <div className='header-title'>
        <h1>PORSCHE</h1>
      </div>
      <button className='user-btn'>
        <FontAwesomeIcon icon={faUser} size="lg"/>
      </button>
       </div>

    </header>
    


   

    </>
  )
}

export default Header
