import React from 'react'
import './projects.css'
import ArduinoStockDisplay from '../../assets/ArduinoStockDisplay.jpg'
import PicPerfect from '../../assets/PicPerfect.jpg'
import FinanceBroTranslator from '../../assets/FinanceBroTranslator.png'
import MagicGlove from '../../assets/MagicGlove.jpg'
import Planet from '../../assets/Plan-et.jpg'
import MedicalAssistantBot from '../../assets/MedicalAssistantBot.jpg'
import PersonalWebsite from '../../assets/PersonalWebsite.jpg'
import ArduinoSnake from '../../assets/ArduinoSnake.jpg'
import NumberConverter from '../../assets/NumberConverter.jpg'
import CryptoTerminal from '../../assets/CryptoTerminal.jpg'
import MorseCode from '../../assets/MorseCode.jpg'
import MiniGolf from '../../assets/MiniGolf.jpg'
import GolfStats from '../../assets/GolfStats.jpg'
import DiscordBot from '../../assets/DiscordBot.jpg'
import { BsGithub, BsGlobe, BsYoutube } from 'react-icons/bs'
import { SiDjango, SiDevpost, SiC, SiCplusplus, SiPython, SiJava, SiJavascript, SiHtml5, SiCss3, SiReact, SiArduino, SiAndroid, SiStmicroelectronics, SiScikitlearn, SiRaspberrypi, SiTensorflow, SiOpencv } from 'react-icons/si'

const logos = {
  'Android': <SiAndroid size={20} />,
  'Arduino': <SiArduino size={20} />,
  'C': <SiC size={20} />,
  'C++': <SiCplusplus size={20} />,
  'CSS': <SiCss3 size={20} />,
  'Django': <SiDjango size={20} />,
  'HTML': <SiHtml5 size={20} />,
  'Java': <SiJava size={20} />,
  'JavaScript': <SiJavascript size={20} />,
  'OpenCV': <SiOpencv size={20} />,
  'Python': <SiPython size={20} />,
  'Raspberry Pi': <SiRaspberrypi size={20} />,
  'React.js': <SiReact size={20} />,
  'scikit-learn': <SiScikitlearn size={20} />,
  'STM': <SiStmicroelectronics size={20} />,
  'TensorFlow': <SiTensorflow size={20} />,
}

const data = [
  {
    image: ArduinoStockDisplay,
    title: 'Arduino Stock Ticker Display',
    languages: [
      'Arduino',
      'C++',
      'Python',
    ],
    description: 'Arduino-based stock ticker display that shows real-time stock prices.',
    links: [
      {
        link: 'https://github.com/thomashart17/stock-ticker-display',
        icon: <BsGithub />,
      },
    ],
  },
  {
    image: PicPerfect,
    title: 'Pic Perfect',
    languages: [
      'Raspberry Pi',
      'Python',
      'TensorFlow',
      'OpenCV',
    ],
    description: 'AI-powered robot that allows you to take photos of yourself effortlessly.',
    links: [
      {
        link: 'https://github.com/prachee-n16/pic-perfect',
        icon: <BsGithub />,
      },
      {
        link: 'https://devpost.com/software/picture-perfect-oqgb92',
        icon: <SiDevpost />,
      },
      {
        link: 'https://youtu.be/yJHdFqeJDfY?si=TWOOABHnsrSOJMlK',
        icon: <BsYoutube />,
      },
    ],
  },
  {
    image: FinanceBroTranslator,
    title: 'Finance Bro Translator',
    languages: [
      'Python',
      'Django',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    description: 'A tool to translate complex financial jargon into easy to understand text.',
    links: [
      {
        link: 'https://github.com/henryklinck/finance_translator',
        icon: <BsGithub />,
      },
      {
        link: 'https://devpost.com/software/finance-bros-translator',
        icon: <SiDevpost />,
      },
      {
        link: 'https://www.youtube.com/watch?v=Nm6n0PFawEQ',
        icon: <BsYoutube />,
      },
    ],
  },
  {
    image: MagicGlove,
    title: 'The Magic Glove',
    languages: [
      'Raspberry Pi',
      'Python',
    ],
    description: 'An assistive device for people who are blind or visually impaired.',
    links: [
      {
        link: 'https://github.com/thomashart17/MagicGlove',
        icon: <BsGithub />,
      },
      {
        link: 'https://devpost.com/software/the-magic-glove',
        icon: <SiDevpost />,
      },
      {
        link: 'https://www.youtube.com/watch?v=UgMxqQqd3D8',
        icon: <BsYoutube />,
      },
    ]
  },
  {
    image: Planet,
    title: 'PLAN-ET',
    languages: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
    ],
    description: 'Application that can help students plan out their weekly schedules.',
    links: [
      {
        link: 'https://github.com/theo110/PLAN-ET',
        icon: <BsGithub />,
      },
      {
        link: 'https://devpost.com/software/plan-et',
        icon: <SiDevpost />,
      },
    ],
  },
  {
    image: ArduinoSnake,
    title: 'Arduino LED Matrix Snake Game',
    languages: [
      'Arduino',
      'C',
      'Python',
    ],
    description: 'Implementation of the game "Snake" using an Arduino and LED Matrix.',
    links: [
      {
        link: 'https://github.com/thomashart17/ArduinoLEDMatrixSnake',
        icon: <BsGithub />,
      },
    ],
  },
  {
    image: NumberConverter,
    title: 'Number Converter App',
    languages: [
      'Android',
      'Java',
    ],
    description: 'Android app that allows users to convert between 4 number systems.',
    links: [
      {
        link: 'https://github.com/thomashart17/NumberConverter',
        icon: <BsGithub />,
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
        icon: <BsGithub />,
      },
    ],
  },
  {
    image: MedicalAssistantBot,
    title: 'Medical Assistant Bot',
    languages: [
      'Python',
      'scikit-learn',
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
    ],
    description: 'Application that leverages machine learning to predict potential diagnoses based on symptoms.',
    links: [
      {
        link: 'https://github.com/thomashart17/MedicalVirtualAssistantHTV7',
        icon: <BsGithub />,
      },
      {
        link: 'https://devpost.com/software/medical-chatbot-kptu9d',
        icon: <SiDevpost />,
      },
    ],
  },
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
        link: 'https://github.com/thomashart17/thomashart17.github.io',
        icon: <BsGithub />,
      },
      {
        link: 'https://thomashart.tech',
        icon: <BsGlobe />,
      }
    ],
  },
  {
    image: MorseCode,
    title: 'STM32 Morse Code Game',
    languages: [
      'STM',
      'C',
    ],
    description: 'Morse code game created using an STM32 microcontroller and I2C LCD display.',
    links: [
      {
        link: 'https://github.com/thomashart17/MorseCodeGameSTM32',
        icon: <BsGithub />,
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
        icon: <BsGithub />,
      },
      {
        link: 'https://devpost.com/software/discord-game-bot-nk024t',
        icon: <SiDevpost />,
      },
      {
        link: 'https://www.youtube.com/watch?v=vG9G4DSoYMY',
        icon: <BsYoutube />,
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
        icon: <BsGithub />,
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
        icon: <BsGithub />,
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
          data.map(({ image, title, languages, description, links }) => {
            return (
              <article className='projects__item'>
                <div className="projects__item-image">
                  <img src={image} alt={title} />
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
                    links.map(({ link, icon }) => {
                      if (link === 'https://thomashart.tech') {
                        return (
                          <a href={link}>{icon}</a>
                        )
                      }
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