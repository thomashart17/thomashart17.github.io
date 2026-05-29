import React from 'react'
import './nav.css'
import {useState} from 'react'
import {AiFillHome, AiFillTool, AiFillPhone} from 'react-icons/ai'
import {BsFillPersonFill, BsFillBriefcaseFill} from 'react-icons/bs';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  const handleClick = (e, hash) => {
    e.preventDefault()
    setActiveNav(hash)
    if (hash === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <a href='#' onClick={(e) => handleClick(e, '#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={(e) => handleClick(e, '#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill/></a>
      <a href='#experience' onClick={(e) => handleClick(e, '#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBriefcaseFill/></a>
      <a href='#projects' onClick={(e) => handleClick(e, '#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiFillTool/></a>
      <a href='#contact' onClick={(e) => handleClick(e, '#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillPhone/></a>
    </nav>
  )
}

export default Nav
