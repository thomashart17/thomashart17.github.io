import React from 'react'
import Resume from '../../assets/Resume.pdf'

const HeaderButtons = () => {
  return (
    <div className='header__buttons'>
        <a href={Resume} download className='btn'>Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default HeaderButtons