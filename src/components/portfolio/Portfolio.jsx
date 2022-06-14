import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/runbuddy.png'
import IMG2 from '../../assets/WorldWise.png'
import IMG3 from '../../assets/PawParatzi.png'
import IMG4 from '../../assets/Horizen.png'
import IMG5 from '../../assets/passwordGenerator.png'
import IMG6 from '../../assets/CodingQuiz.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Run Buddy',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'WorldWise',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'PawParatzi',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Horizen',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Password Generator',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Coding Quiz',
    github: 'https://github.com/',
    demo: 'https://github.com/'
  }


]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article  key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className="btn">Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio