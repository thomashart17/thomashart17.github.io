import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpeg'

const languages = [
  'C++',
  'C',
  'Python',
  'Verilog',
  'Rust',
  'Java',
  'Typescript',
  'JavaScript',
  'ARM Assembly',
  'PostgreSQL',
  'MySQL',
]

const frameworks = [
  'Pandas',
  'React.js',
  'Django',
  'Langchain',
  'Android SDK',
  'AOSP',
]

const tools = [
  'Linux',
  'Git',
  'Vivado',
  'CMake',
  'Make',
  'Tableau',
  'Metabase',
  'DBT',
]

const hardware = [
  'FPGA',
  'STM32',
  'Arduino',
  'Raspberry Pi',
  'Oscilloscope'
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
          <div className='about__paragraph'>
            <p>
            Embedded Software Engineer at Fortinet and University of Waterloo Computer Engineering graduate with experience across embedded systems, systems software, data engineering, and software engineering. I'm particularly interested in networking, low-latency computing, and performance-critical systems, and I enjoy building software that operates close to the hardware and solves complex technical problems.
            </p>
          </div>
        </div>
        <div className='about__content'>
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