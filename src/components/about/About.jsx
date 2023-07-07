import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpeg'

const languages = [
  'C++',
  'Java',
  'Python',
  'C',
  'Rust',
  'HTML',
  'CSS',
  'JavaScript',
  'VHDL',
  'ARM Assembly',
  'LaTeX',
]

const frameworks = [
  'Android SDK',
  'AOSP',
  'React.js',
  'Django',
  'scikit-learn',
  'Cohere',
  'LibGDX',
  'SeaHorn',
]

const tools = [
  'Git',
  'GitHub',
  'VS Code',
  'CMake',
  'Android Studio',
  'Visual Studio',
  'JIRA',
  'Confluence',
]

const hardware = [
  'Arduino',
  'Raspberry Pi',
]

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__paragraph'>
            <p>
              I'm a second year computer engineering student at the University of Waterloo interested in both computer software and hardware.
            </p>
          </div>
          <div className='about__skills'>
            <h2>Skills</h2>
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
            <h3>Hardware</h3>
            <ul>
              {
                hardware.map((value) => {
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