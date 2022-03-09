import React from 'react'
import logoImg from '../public/logo.png'

function Header(props) {
  return (
    <div className='header-container'>
        <img src={logoImg.src} alt="logo" className='header-logo' />
        <h1 className='hyper-text logo-title'>{props.children}</h1>
    </div>
  )
}

export default Header
