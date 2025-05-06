import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpeg'

const languages = [
  'C++',
  'C',
  'Java',
  'Python',
  'Verilog',
  'Rust',
  'VHDL',
  'ARM Assembly',
  'SQL',
  'PostgreSQL',
  'MySQL',
  'HTML',
  'CSS',
  'Typescript',
  'JavaScript',
]

const frameworks = [
  'Langchain',
  'Android SDK',
  'AOSP',
  'React.js',
  'Django',
  'Pandas',
]

const tools = [
  'Linux',
  'Git',
  'CMake',
  'Tableau',
  'Metabase',
  'DBT',
]

const hardware = [
  'STM32',
  'FPGA',
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
              I'm a 4A computer engineering student at the University of Waterloo, with a keen interest in both computer software and hardware. 
              I have completed 5 co-op terms so far, working in a variety of roles in the diverse fields of software development. 
              This experience has allowed me to gain experience in a variety of languages, frameworks, and tools, and has allowed me to develop the ability to quickly learn new technologies and adapt to new roles. 
              Outside of my academic and professional endeavors, I've dedicated my time to a variety of personal projects, which have allowed me to explore my interests in more depth and further expand my skillset. 
              In addition to the projects I have done on my own time, I have built projects for submission at 8 hackathons, winning prizes at 2 of them.
              I am always open to hearing about exciting new opportunities and collaborating on new projects. 
              If you're interested in connecting or collaborating, please feel free to reach out to me!
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