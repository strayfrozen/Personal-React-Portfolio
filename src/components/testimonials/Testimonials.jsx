import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/coon.jpg'
import AVTR2 from '../../assets/coon.jpg'
import AVTR3 from '../../assets/coon.jpg'
import AVTR4 from '../../assets/coon.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem incidunt nemo rem iure reiciendis nesciunt alias ut similique magni sit nostrum nihil, provident neque et non, cumque culpa! Aspernatur.'
  },
  {
    avatar: AVTR2,
    name: 'Bob Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem incidunt nemo rem iure reiciendis nesciunt alias ut similique magni sit nostrum nihil, provident neque et non, cumque culpa! Aspernatur.'
  },
  {
    avatar: AVTR3,
    name: 'Joe Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem incidunt nemo rem iure reiciendis nesciunt alias ut similique magni sit nostrum nihil, provident neque et non, cumque culpa! Aspernatur.'
  },
  {
    avatar: AVTR4,
    name: 'Billy Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem incidunt nemo rem iure reiciendis nesciunt alias ut similique magni sit nostrum nihil, provident neque et non, cumque culpa! Aspernatur.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>

            )
          })
        }



      </Swiper>
    </section>
  )
}

export default Testimonials