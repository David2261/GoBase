import React from 'react'
import './about.css'
import ME from '../../assets/Bulat_Moscow.webp'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {TbRocket} from 'react-icons/tb'


function TakeTime() {
	let currentTime = new Date();
	return currentTime.getFullYear() - 2019;
}


const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About Image" />
					</div>
				</div>
				<div className="abut__content">
					<div className="about__cards">
						<article className="about__card">
						<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>{TakeTime()}+ Years Working</small>
						</article>
					</div>
					<div className="about__cards">
						<article className="about__card">
						<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>100+ Worldwide</small>
						</article>
					</div>
					<div className="about__cards">
						<article className="about__card">
						<TbRocket className="about__icon" />
							<h5>Projects</h5>
							<small>20+ Completed</small>
						</article>
					</div>
					<p>
						Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Labore quia accusantium, qui reprehenderit blanditiis sint optio nihil nisi voluptatem esse iusto, ad mollitia assumenda cumque, doloremque enim nobis repellendus. Ipsa.
					</p>
					<a href="#contact" className="btn btn-primary">Let's Talk</a>
				</div>
			</div>
		</section>
	)
}


export default About