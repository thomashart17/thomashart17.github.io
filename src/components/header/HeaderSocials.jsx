import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiDevpost } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com/in/thomashart17' target='_blank' rel='noreferrer'><BsLinkedin /></a>
      <a href='https://github.com/thomashart17' target='_blank' rel='noreferrer'><BsGithub /></a>
      <a href='https://devpost.com/thomashart17' target='_blank' rel='noreferrer'><SiDevpost /></a>
    </div>
  )
}

export default HeaderSocials