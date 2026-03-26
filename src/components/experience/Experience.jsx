import React from 'react'
import './experience.css'
import { GiSevenPointedStar } from 'react-icons/gi'
import { TiLocation, TiCalendar } from 'react-icons/ti'
import WaterlooLogo from '../../assets/waterloo-logo.png'
import PerasoLogo from '../../assets/peraso-logo.png'
import FordLogo from '../../assets/ford-logo.png'
import ChurchillLogo from '../../assets/churchill-logo.png'
import AIDocsLogo from '../../assets/ai-docs-logo.svg'
import RxFoodLogo from '../../assets/rx-food-logo.svg'
import RandoxLogo from '../../assets/randox-logo.svg'

const data = [
  {
    company: 'Randox',
    title: 'Software Engineer',
    location: 'Antrim, Northern Ireland',
    dates: 'Sep 2025 - Dec 2025',
    bullets: [
      'Rearchitected a Python Panel biochip viewing application using distributed computing with Dask to eliminate concurrent user stalling and improve scalability for multiple simultaneous users.',
      'Implemented a Prefect server with reverse proxy through NGINX to distribute and schedule critical services, streamlining workflow automation and improving system reliability.',
      'Optimized backend database queries and indexing strategies to reduce load times by 95%+ for critical internal applications using SQL Server and SQLAlchemy.'
    ],
    image: RandoxLogo,
  },
  {
    company: 'RxFood',
    title: 'Data Engineer',
    location: 'Toronto, ON',
    dates: 'Jan 2025 - Apr 2025',
    bullets: [
      'Built a custom reporting engine using Python and PostgreSQL to automatically generate patient outcome reports for clinicians, saving 2-3 hours of manual work per report and improving long-term scalability.',
      'Added interactive visualizations to the clinician portal using React.js and TypeScript, enabling actionable insights into patient health trends for 600+ clinicians.'
    ],
    image: RxFoodLogo,
  },
  {
    company: 'AI Docs',
    title: 'Software Engineer - Enterprise Co-op',
    location: 'Vancouver, BC',
    dates: 'Jan 2024 - Jun 2024',
    bullets: [
      'Built a codebase documentation tool using Python, Langchain, and abstract syntax tree parsing to automatically generate structured documentation from source code.',
      'Won the Overbeeke Family Entrepreneurship Excellence Award ($5,000) from the University of Waterloo\'s enterprise co-op pitch competition out of 30+ students.',
    ],
    image: AIDocsLogo,
  },
  {
    company: 'University of Waterloo',
    title: 'Undergraduate Research Assistant',
    location: 'Waterloo, ON',
    dates: 'May 2023 - Aug 2023',
    bullets: [
      'Performed formal verification of Rust code using the SeaHorn verification framework, achieving a 50% reduction in verification time by implementing alternatives to standard library data structures.',
      'Validated accuracy by writing verification jobs to detect errors in legacy versions of popular Rust crates.',
    ],
    image: WaterlooLogo,
  },
  {
    company: 'Peraso Technologies',
    title: 'Software Engineer',
    location: 'Toronto, ON',
    dates: 'Sep 2022 - Dec 2022',
    bullets: [
      'Developed a custom XML parsing and generation tool in C++ to streamline EEPROM programming, achieving 95% faster input speed compared to manual entry.',
      'Optimized CLI firmware for 5G radio devices and refactored redundant command outputs, resulting in 20% faster runtime and 10% reduction in memory usage.',
    ],
    image: PerasoLogo,
  },
  {
    company: 'Ford Motor Company',
    title: 'Autonomous Vehicle Android Developer',
    location: 'Remote',
    dates: 'Jan 2022 - Apr 2022',
    bullets: [
      'Migrated legacy code to the latest Android version and newer build system, enabling long-term compatibility and a 25% reduction in build time.',
      'Implemented a feature for the map application in an in-vehicle infotainment system using hidden AOSP Java classes.',
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
                index % 2 === 1 ? <img src={image} alt={company} className={company === 'RxFood' ? 'experience__rxfood-logo' : ''} /> : <></>
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
                index % 2 === 0 ? <img src={image} alt={company} className={company === 'RxFood' ? 'experience__rxfood-logo' : ''} /> : <></>
              }
            </div>
          )
        })
      }
    </section>
  )
}

export default Experience