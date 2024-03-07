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
    dates: 'Jan 2024 - Present',
    bullets: [
      'Spearheading the development of an innovative AI-powered tool aimed at automating the process of writing codebase documentation, designed to streamline software development processes and enhance developer productivity.',
      'Leveraging prompt engineering and fine-tuning techniques to ensure the tool delivers consistently accurate and detailed documentation.',
      'Implementing integrations with popular platforms like GitHub to seamlessly and automatically update the documentation with every code change.',
      'Engaging with potential customers to identify common issues in existing documentation practices, using feedback to shape a feature roadmap.',
      'Received the Overbeeke Family Entrepreneurship Excellence Award from the University of Waterloo\'s enterprise co-op pitch competition.',
    ],
    image: AIDocsLogo,
  },
  {
    company: 'University of Waterloo',
    title: 'Research Assistant',
    location: 'Waterloo, ON',
    dates: 'May 2023 - Aug 2023',
    bullets: [
      'Collaborated with a team of researchers supervised by professor Arie Gurfinkel to verify Rust code using the SeaHorn verification framework.',
      'Investigated alternatives to the Rust standard library vector class to improve runtime performance of verification jobs.',
      'Demonstrated the effectiveness of the SeaHorn framework by creating jobs to identify critical errors in old versions of widely used Rust crates.',
      'Developed a custom Python script to automate the generation of boilerplate code for verification jobs, improving development times.',
    ],
    image: WaterlooLogo,
  },
  {
    company: 'Peraso Technologies',
    title: 'Software Engineer',
    location: 'Toronto, ON',
    dates: 'Sep 2022 - Dec 2022',
    bullets: [
      'Contributed to the development of firmware and internal tools for 5G radio devices using C++ as a member of the Device Software team.',
      'Designed a custom XML parsing and generation tool that streamlined the input of data into an EEPROM programming application.',
      'Enhanced the stability of CLI code by improving error checking and eliminating crashes caused by invalid user input.',
      'Revised various CLI commands to optimize output clarity and eliminate redundant information, resulting in improved usability for end users.',
    ],
    image: PerasoLogo,
  },
  {
    company: 'Ford Motor Company',
    title: 'Autonomous Vehicle Android Developer',
    location: 'Remote',
    dates: 'Jan 2022 - Apr 2022',
    bullets: [
      'Built high-quality Android applications for an in-vehicle infotainment system using Java, ensuring optimal performance and user experience.',
      'Demonstrated technical expertise by utilizing obscure AOSP classes to successfully implement a critical feature, despite minimal documentation.',
      'Migrated key features to the latest version of Android, enabling the adoption of new technologies and ensuring long-term compatibility.',
      'Followed industry best practices, applying sound development methodologies to write clean, efficient code and documentation.',
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