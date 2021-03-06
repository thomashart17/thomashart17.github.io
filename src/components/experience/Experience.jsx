import React from 'react'
import './experience.css'
import {GiSevenPointedStar} from 'react-icons/gi'
import {TiLocation, TiCalendar} from 'react-icons/ti'
import FordLogo from '../../assets/ford-logo.png'
import ChurchillLogo from '../../assets/churchill-logo.png'

const data = [
  {
    company: 'Ford Motor Company',
    title: 'Autonomous Vehicle Android Developer',
    location: 'Remote',
    dates: 'Jan 2022 - Apr 2022',
    bullets: [
      'Built Android applications using Java for the in-vehicle infotainment system.',
      'Leveraged hidden AOSP classes with minimal documentation to allow for a key feature to be implemented.',
      'Followed proper development practices to write clean and efficient code and documentation.',
    ],
    image: FordLogo,
  },
  {
    company: 'Sir Winston Churchill Secondary School',
    title: 'Computer Science Peer Tutor',
    location: 'Vancouver, BC',
    dates: 'Feb 2021 - Apr 2021',
    bullets: [
      'Helped four classes of 15 students create and debug a variety of programs using basic Python.',
      'Acted as a leader and gave suggestions on how less experienced students could improve their programs',
      'Exhibited great attention to detail by grading student’s assignments based on a strict set of criteria',
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
        data.map(({company, title, location, dates, bullets, image}, index) => {
          return (
            <div className='container experience__container'>
              {
                index%2 === 1 ? <img src={image} alt={company}/> : <></>
              }
              <div>
                <h3 className='experience__company'>{company}</h3>
                <h3 className='experience__title'>{title}</h3>
                <div className='experience__info'>
                  <div className="experience__info-item">
                    <TiLocation className='experience__icon'/>
                    <h4>{location}</h4>
                  </div>
                  <div className="experience__info-item">
                    <TiCalendar className='experience__icon'/>
                    <h4>{dates}</h4>
                  </div>
                </div>
                <div className='experience__content'>
                  {
                    bullets.map((value) => {
                      return(
                        <article className='experience__details'>
                          <GiSevenPointedStar className='experience__details-icon'/>
                          <h4>{value}</h4>
                        </article>
                      )
                    })
                  }
                </div>
              </div>
              {
                index%2 === 0 ? <img src={image} alt={company}/> : <></>
              }
            </div>
          )
        })
      }
    </section>
  )
}

export default Experience