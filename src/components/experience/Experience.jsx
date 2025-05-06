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

const data = [
  {
    company: 'RxFood',
    title: 'Data Engineer',
    location: 'Toronto, ON',
    dates: 'Jan 2025 - Apr 2025',
    bullets: [
      'Built a custom reporting engine using Python and PostgreSQL to automatically generate patient outcome reports for clinicians, saving 2-3 hours of manual work per report and improving long-term scalability.',
      'Added interactive graphs and visualizations to the clinician portal using React.js and TypeScript, improving usability and enabling actionable insights into patient health trends for 600+ clinicians.'
    ],
    image: RxFoodLogo,
  },
  {
    company: 'AI Docs',
    title: 'Founder',
    location: 'Vancouver, BC',
    dates: 'Jan 2024 - Jun 2024',
    bullets: [
      'Leveraged prompt engineering and fine-tuning techniques on LLMs using Python and Langchain to create a tool that automatically writes documentation for codebases, enabling faster and more streamlined development.',
      'Won the Overbeeke Family Entrepreneurship Excellence Award ($5,000) from the University of Waterloo’s enterprise co-op pitch competition out of 30+ students, recognizing the tool’s impact on development efficiency.',
      'Engaged with potential users to identify key documentation challenges, directly influencing design decisions.',
      'Made the strategic decision to discontinue the project after determining that existing LLMs lacked the necessary contextual understanding, and that developing a new LLM wasn’t feasible due to financial constraints.'
    ],
    image: AIDocsLogo,
  },
  {
    company: 'University of Waterloo',
    title: 'Undergraduate Research Assistant',
    location: 'Waterloo, ON',
    dates: 'May 2023 - Aug 2023',
    bullets: [
      'Collaborated with a team of researchers supervised by Professor Arie Gurfinkel to perform formal verification of Rust code using the SeaHorn verification framework, enhancing code reliability, and eliminating logic errors.',
      'Achieved a 50% reduction in verification time by using alternatives to common data structures in the Rust standard library, while maintaining accuracy by writing verification jobs to find errors in legacy versions of popular Rust crates.',
    ],
    image: WaterlooLogo,
  },
  {
    company: 'Peraso Technologies',
    title: 'Software Engineer',
    location: 'Toronto, ON',
    dates: 'Sep 2022 - Dec 2022',
    bullets: [
      'Developed a custom XML parsing and generation tool in C++ to streamline EEPROM programming, achieving 95% faster input speed compared to manually entry and saving valuable engineering time and resources.',
      'Optimized the CLI firmware for 5G radio devices and refactored redundant command outputs, resulting in 20% faster runtime, 10% less memory usage, more clear and concise output, and the elimination of all input errors.',
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
      'Migrated legacy code to the latest Android version and to use a newer build system, allowing for long-term compatibility with future development and a 25% reduction in build time.',
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