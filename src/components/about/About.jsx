import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpeg'

const languages = [
  'Java',
  'Python',
  'C/C++',
  'HTML',
  'CSS',
  'JavaScript',
  'XML',
]

const frameworks = [
  'Android SDK',
  'AOSP',
  'React.js', 
  'LibGDX',
]

const tools = [
  'Git',
  'GitHub',
  'Android Studio',
  'VS Code',
  'JIRA',
  'Confluence',
  'Arduino',
]

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='About Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__paragraph'>
            <p>
              I'm a first year computer engineering student at the University of Waterloo interested in both computer software and hardware. 
            </p>
          </div>
          <div className='about__skills'>
            <h3>Languages</h3>
            <ul>
              {
                languages.map((value) => {
                  return (
                    <li>{value}</li>
                  )
                })
              }
            </ul>
            <h3>Frameworks/Libraries</h3>
            <ul>
              {
                frameworks.map((value) => {
                  return (
                    <li>{value}</li>
                  )
                })
              }
            </ul>
            <h3>Tools</h3>
            <ul>
              {
                tools.map((value) => {
                  return (
                    <li>{value}</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About