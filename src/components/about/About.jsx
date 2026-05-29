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
            Recent graduate from Computer Engineering at the University of Waterloo, with six co-op terms of experience across software engineering, data engineering, and research. My primary interests are in FPGA and embedded systems, low-latency computing, and systems-level software. My capstone project is a pre-trade risk gateway built on an AMD FPGA for real-time risk checking in high-frequency trading, achieving sub-6 microsecond end-to-end latency. I'm currently looking for full-time opportunities in FPGA/embedded engineering or systems software roles.
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