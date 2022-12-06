import React from 'react'
import './header.css'
import HeaderButtons from './HeaderButtons'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className='container header__inner'>
          <h5 className='header__above-title'>Hello I'm</h5>
          <h1>Thomas Hart</h1>
          <h5 className='text-light header__subtitle'>Computer Engineering Student</h5>
          <HeaderButtons />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header