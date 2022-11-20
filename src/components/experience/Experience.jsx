import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function DateTime(num) {
	return (new Date()).getFullYear() - num;
}

const Experience = () => {
	return (
		<section id='experience'>
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>
			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Frontend Development</h3>
					<div className="experience__content">
						<article className="experience__detail">
							<BsPatchCheckFill  className="experience__details-icon"/>
							<div>
								<h4>HTML</h4>
								<small className="text-light">{DateTime(2019)} years</small>
							</div>
						</article>
						<article className="experience__detail">
							<BsPatchCheckFill  className="experience__details-icon"/>
							<div>
								<h4>CSS/SASS</h4>
								<small className="text-light">{DateTime(2019)} years</small>
							</div>
						</article>
						<article className="experience__detail">
							<BsPatchCheckFill  className="experience__details-icon"/>
							<div>
								<small className="text-light">{DateTime(2019)} years</small>
								<h4>JS</h4>
							</div>
						</article>
						<article className="experience__detail">
							<BsPatchCheckFill  className="experience__details-icon"/>
							<div>
								<h4>React</h4>
								<small className="text-light">{DateTime(2021)} years</small>
							</div>
						</article>
						<article className="experience__detail">
							<BsPatchCheckFill  className="experience__details-icon"/>
							<div>
								<h4>Vue</h4>
								<small className="text-light">{DateTime(2021)} years</small>
							</div>
						</article>
						<article className="experience__detail">
							<BsPatchCheckFill  className="experience__details-icon"/>
							<div>
								<h4>Node</h4>
								<small className="text-light">{DateTime(2021)} years</small>
							</div>
						</article>
					</div>
				</div>
				<div className="experience__backend">
					<h3>Backend Development</h3>
					<div className="experience__content">
						<article className="experience__detail">
							<BsPatchCheckFill  className="experience__details-icon"/>
							<div>
								<h4>Python</h4>
								<small className="text-light">{DateTime(2019)} years</small>
							</div>
						</article>
						<article className="experience__detail">
							<BsPatchCheckFill  className="experience__details-icon"/>
							<div>
								<h4>Django</h4>
								<small className="text-light">{DateTime(2019)} years</small>
							</div>
						</article>
						<article className="experience__detail">
							<BsPatchCheckFill  className="experience__details-icon"/>
							<div>
								<h4>DRF</h4>
								<small className="text-light">{DateTime(2020)} years</small>
							</div>
						</article>
						<article className="experience__detail">
							<BsPatchCheckFill  className="experience__details-icon"/>
							<div>
								<h4>C</h4>
								<small className="text-light">{DateTime(2021)} years</small>
							</div>
						</article>
						<article className="experience__detail">
							<BsPatchCheckFill  className="experience__details-icon"/>
							<div>
								<h4>Nginx</h4>
								<small className="text-light">{DateTime(2021)} years</small>
							</div>
						</article>
						<article className="experience__detail">
							<BsPatchCheckFill  className="experience__details-icon"/>
							<div>
								<h4>Debian (bash script)</h4>
								<small className="text-light">{DateTime(2021)} years</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}


export default Experience