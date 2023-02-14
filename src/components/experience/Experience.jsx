import React from 'react'
import './experience.css'
import { GiSevenPointedStar } from 'react-icons/gi'
import { TiLocation, TiCalendar } from 'react-icons/ti'
import PerasoLogo from '../../assets/peraso-logo.png'
import FordLogo from '../../assets/ford-logo.png'
import ChurchillLogo from '../../assets/churchill-logo.png'

const data = [
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