import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
	{
		avatar: AVT1,
		name: 'David Katzman',
		review: 'Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Sint quos, itaque repudiandae similique, possimus debitis mollitia commodi qui quod, obcaecati necessitatibus veniam veritatis repellendus. Odio, similique. Beatae blanditiis culpa laborum!',
	},
	{
		avatar: AVT2,
		name: 'Guzel Izmailova',
		review: 'Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Sint quos, itaque repudiandae similique, possimus debitis mollitia commodi qui quod, obcaecati necessitatibus veniam veritatis repellendus. Odio, similique. Beatae blanditiis culpa laborum!',
	},
	{
		avatar: AVT3,
		name: 'German Nikonov',
		review: 'Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Sint quos, itaque repudiandae similique, possimus debitis mollitia commodi qui quod, obcaecati necessitatibus veniam veritatis repellendus. Odio, similique. Beatae blanditiis culpa laborum!',
	},
	{
		avatar: AVT4,
		name: 'Vladimir Kellerman',
		review: 'Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Sint quos, itaque repudiandae similique, possimus debitis mollitia commodi qui quod, obcaecati necessitatibus veniam veritatis repellendus. Odio, similique. Beatae blanditiis culpa laborum!',
	},
]

const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Review from clients</h5>
			<h2>Testimonials</h2>
			<Swiper className="container testimonial__container"
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{
					data.map(({avatar, name, review}) => {
						return (
							<SwiperSlide className="testimonial">
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