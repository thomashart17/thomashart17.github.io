import React from 'react'
import Resume from '../../assets/ThomasHartResume.pdf'

const HeaderButtons = () => {
  return (
    <div className='header__buttons'>
      <a href={Resume} download className='btn'>R&#233;sum&#233;</a>
      <a href='#contact' className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default HeaderButtons