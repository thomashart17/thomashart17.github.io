import React from 'react'
import './experience.css'
import { GiSevenPointedStar } from 'react-icons/gi'
import { TiLocation, TiCalendar } from 'react-icons/ti'
import WaterlooLogo from '../../assets/waterloo-logo.png'
import PerasoLogo from '../../assets/peraso-logo.png'
import FordLogo from '../../assets/ford-logo.png'
import ChurchillLogo from '../../assets/churchill-logo.png'
import AIDocsLogo from '../../assets/ai-docs-logo.svg'

const data = [
  {
    company: 'AI Docs',
    title: 'Founder',
    location: 'Vancouver, BC',
    dates: 'Jan 2024 - Jun 2024',
    bullets: [
      'Leveraged prompt engineering and fine-tuning techniques on LLMs using Python and Langchain to create a tool that automatically writes documentation for codebases, enabling faster and more streamlined development.',
      'Won the Overbeeke Family Entrepreneurship Excellence Award ($5,000) from the University of Waterloo’s enterprise co-op pitch competition out of 30+ students, recognizing the tool’s impact on development efficiency.',
      'Engaged with potential users to identify key documentation challenges, directly influencing design decisions.',
    ],
    image: AIDocsLogo,
  },
  {
    company: 'University of Waterloo',
    title: 'Research Assistant',
    location: 'Waterloo, ON',
    dates: 'May 2023 - Aug 2023',
    bullets: [
      'Collaborated with a team of researchers supervised by Professor Arie Gurfinkel to perform formal verification of Rust code using the SeaHorn verification framework, enhancing code reliability.',
      'Reduced verification time by 50% by using alternatives to common data structures in the Rust standard library.',
      'Demonstrated SeaHorn’s effectiveness by writing verification jobs to find errors in legacy versions of Rust crates.',
    ],
    image: WaterlooLogo,
  },
  {
    company: 'Peraso Technologies',
    title: 'Software Engineer',
    location: 'Toronto, ON',
    dates: 'Sep 2022 - Dec 2022',
    bullets: [
      'Developed a custom XML parsing and generation tool in C++ to streamline EEPROM programming, achieving 95% faster input speed compared to manually entry.',
      'Optimized the CLI code for 5G radio devices and removed redundant command outputs, resulting in 20% faster runtime, and elimination of all input errors.',
    ],
    image: PerasoLogo,
  },
  {
    company: 'Ford Motor Company',
    title: 'Autonomous Vehicle Android Developer',
    location: 'Remote',
    dates: 'Jan 2022 - Apr 2022',
    bullets: [
      'Leveraged hidden AOSP Java classes to implement a critical feature for the map application in an in-vehicle infotainment system, demonstrating technical agility and understanding of OOP concepts.',
      'Migrated legacy code to the latest Android, allowing for long-term compatibility with future development.',
    ],
    image: FordLogo,
  },
  {
    company: 'Sir Winston Churchill Secondary School',
    title: 'Computer Science Peer Tutor',
    location: 'Vancouver, BC',
    dates: 'Feb 2021 - Apr 2021',
    bullets: [
      'Provided effective tutoring to four classes of 15 students, facilitating their learning of basic Python programming concepts.',
      'Demonstrated leadership and provided feedback to students to help them improve their skills and successfully complete their projects.',
      'Maintained high standards and accuracy by grading student assignments thoroughly and objectively, adhering to a strict set of criteria.',
    ],
    image: ChurchillLogo,
  },
]

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Where I've Worked</h5>
      <h2>My Experience</h2>
      {
        data.map(({ company, title, location, dates, bullets, image }, index) => {
          return (
            <div className='container experience__container'>
              {
                index % 2 === 1 ? <img src={image} alt={company} /> : <></>
              }
              <div>
                <h3 className='experience__company'>{company}</h3>
                <h3 className='experience__title'>{title}</h3>
                <div className='experience__info'>
                  <div className="experience__info-item">
                    <TiLocation className='experience__icon' />
                    <h4>{location}</h4>
                  </div>
                  <div className="experience__info-item">
                    <TiCalendar className='experience__icon' />
                    <h4>{dates}</h4>
                  </div>
                </div>
                <div className='experience__content'>
                  {
                    bullets.map((value) => {
                      return (
                        <article className='experience__details'>
                          <GiSevenPointedStar className='experience__details-icon' />
                          <h4>{value}</h4>
                        </article>
                      )
                    })
                  }
                </div>
              </div>
              {
                index % 2 === 0 ? <img src={image} alt={company} /> : <></>
              }
            </div>
          )
        })
      }
    </section>
  )
}

export default Experience