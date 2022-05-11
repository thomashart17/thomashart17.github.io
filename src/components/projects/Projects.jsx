import React from 'react'
import './projects.css'
import Sample from '../../assets/sample.jpg'
import PersonalWebsite from '../../assets/PersonalWebsite.jpg'
import ArduinoSnake from '../../assets/ArduinoSnake.jpg'
import NumberConverter from '../../assets/NumberConverter.jpg'
import CryptoTerminal from '../../assets/CryptoTerminal.jpg'
import MorseCode from '../../assets/MorseCode.jpg'
import MiniGolf from '../../assets/MiniGolf.jpg'
import GolfStats from '../../assets/GolfStats.jpg'
import DiscordBot from '../../assets/DiscordBot.jpg'
import {BsGithub, BsYoutube} from 'react-icons/bs'
import {SiDevpost, SiC, SiCplusplus, SiPython, SiJava, SiJavascript, SiHtml5, SiCss3, SiReact} from 'react-icons/si'

const logos = {
  'C': <SiC size={20}/>,
  'C++': <SiCplusplus size={20}/>,
  'CSS': <SiCss3 size={20}/>,
  'HTML': <SiHtml5 size={20}/>,
  'Java': <SiJava size={20}/>,
  'JavaScript': <SiJavascript size={20}/>,
  'Python': <SiPython size={20}/>,
  'React.js': <SiReact size={20}/>,
}

const data = [
  {
    image: PersonalWebsite,
    title: 'Personal Website',
    languages: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
    ],
    description: 'Personal portfolio website created using HTML, CSS, JavaScript and React.js.',
    links: [
      {
        link: 'https://github.com/thomashart17',
        icon: <BsGithub/>,
      }
    ],
  },
  {
    image: ArduinoSnake,
    title: 'Arduino LED Matrix Snake Game',
    languages: [
      'C',
      'Python',
    ],
    description: 'Implementation of the game "Snake" using an Arduino and LED Matrix.',
    links: [
      {
        link: 'https://github.com/thomashart17/ArduinoLEDMatrixSnake',
        icon: <BsGithub/>,
      },
    ],
  },
  {
    image: NumberConverter,
    title: 'Number Converter App',
    languages: [
      'Java',
    ],
    description: 'Android app that allows users to convert between 4 number systems.',
    links: [
      {
        link: 'https://github.com/thomashart17/NumberConverter',
        icon: <BsGithub/>,
      },
    ],
  },
  {
    image: CryptoTerminal,
    title: 'Crypto Terminal',
    languages: [
      'Python',
    ],
    description: 'Terminal application with functionality to check current prices of cryptocurrencies.',
    links: [
      {
        link: 'https://github.com/thomashart17/crypto-terminal',
        icon: <BsGithub/>,
      },
    ],
  },
  {
    image: MorseCode,
    title: 'STM32 Morse Code Game',
    languages: [
      'C',
    ],
    description: 'Morse code game created using an STM32 microcontroller and I2C LCD display.',
    links: [
      {
        link: 'https://github.com/thomashart17/MorseCodeGameSTM32',
        icon: <BsGithub/>,
      },
    ],
  },
  {
    image: DiscordBot,
    title: 'Discord Game Bot',
    languages: [
      'Python',
    ],
    description: 'Discord bot that allows users to play 3 different games.',
    links: [
      {
        link: 'https://github.com/xzc21/Discord-Bot',
        icon: <BsGithub/>,
      },
      {
        link: 'https://devpost.com/software/discord-game-bot-nk024t',
        icon: <SiDevpost/>,
      },
      {
        link: 'https://www.youtube.com/watch?v=vG9G4DSoYMY',
        icon: <BsYoutube/>,
      }
    ],
  },
  {
    image: MiniGolf,
    title: 'Mini Golf Game',
    languages: [
      'Java',
    ],
    description: 'A simple mini golf video game made using the LibGDX Java framework.',
    links: [
      {
        link: 'https://github.com/thomashart17/MiniGolfGame',
        icon: <BsGithub/>,
      },
    ],
  },
  {
    image: GolfStats,
    title: 'Golf Stats Tracker',
    languages: [
      'Java',
    ],
    description: 'A desktop based application used to track personal golf statistics.',
    links: [
      {
        link: 'https://github.com/thomashart17/GolfStatTracker',
        icon: <BsGithub/>,
      },
    ],
  },
]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects__container">
        {
          data.map(({image, title, languages, description, links}) => {
            return (
              <article className='projects__item'>
                <div className="projects__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <ul>
                  {
                    languages.map((value) => {
                      return (
                        <li>{logos[value]}</li>
                      )
                    })
                  }
                </ul>
                <p>{description}</p>
                <div className='projects__item-btn'>
                  {
                    links.map(({link, icon}) => {
                      return (
                        <a href={link} target='_blank'>{icon}</a>
                      )
                    })
                  }
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects