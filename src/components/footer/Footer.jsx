import React from 'react'
import './footer.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiDevpost } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Thomas Hart</a>
      <div className='footer__socials'>
        <a href='https://linkedin.com/in/thomashart17'><BsLinkedin /></a>
        <a href='https://github.com/thomashart17'><BsGithub /></a>
        <a href='https://devpost.com/thomashart'><SiDevpost /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Thomas Hart</small>
      </div>
    </footer>
  )
}

export default Footer