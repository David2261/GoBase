import React from 'react'
import './services.css'
import {CgController} from 'react-icons/cg'


const Services = () => {
	return (
		<section id='services'>
			<h5>What I Offer</h5>
			<h2>Services</h2>
			<div className="container services__container">
				<article className="services">
					<div className="services__head">
						<h3>Web Develop</h3>
					</div>
					<ul className="services__list">
						<li>
							<CgController className="services__list-icon" />
							<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Illo, error?</p>
						</li>
						<li>
							<CgController className="services__list-icon" />
							<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Illo, error?</p>
						</li>
						<li>
							<CgController className="services__list-icon" />
							<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Illo, error?</p>
						</li>
						<li>
							<CgController className="services__list-icon" />
							<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Illo, error?</p>
						</li>
					</ul>
				</article>
				<article className="services">
					<div className="services__head">
						<h3>System</h3>
					</div>
					<ul className="services__list">
						<li>
							<CgController className="services__list-icon" />
							<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Illo, error?</p>
						</li>
						<li>
							<CgController className="services__list-icon" />
							<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Illo, error?</p>
						</li>
						<li>
							<CgController className="services__list-icon" />
							<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Illo, error?</p>
						</li>
						<li>
							<CgController className="services__list-icon" />
							<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Illo, error?</p>
						</li>
					</ul>
				</article>
				<article className="services">
					<div className="services__head">
						<h3>Tool</h3>
					</div>
					<ul className="services__list">
						<li>
							<CgController className="services__list-icon" />
							<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Illo, error?</p>
						</li>
						<li>
							<CgController className="services__list-icon" />
							<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Illo, error?</p>
						</li>
						<li>
							<CgController className="services__list-icon" />
							<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Illo, error?</p>
						</li>
						<li>
							<CgController className="services__list-icon" />
							<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Illo, error?</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	)
}


export default Services