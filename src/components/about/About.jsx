import React from 'react'
import './about.css'
import ME from '../../assets/coon.jpg'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>School</h5>
              <small>6 Month Boot Camp</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>40+ Completed Projects</small>
            </article>
          </div>

          <p>
          I'm a fullstack developer with a passion for Javasript as well as a coding enthusist.
          Currently seeking employment coming from a background in the trade field. I would
          make a great asset to any team and can adapte to any enviorment
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About