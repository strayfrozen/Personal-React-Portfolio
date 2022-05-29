import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      < div className='container experience__container'>
        <div className="experience__fronend">
          <h3>Front End Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>HTML</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>CSS</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Javascript</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Bootstrap</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Tailwind</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>React</h4>
            </article>
          </div>
        </div>


        <div className="experience__backend">
        <h3>Back End Development</h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Node Js</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Mongo Db</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>SQL</h4>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <h4>Express</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience