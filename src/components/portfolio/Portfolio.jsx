import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio/stock_market.webp';
import IMG2 from '../../assets/Portfolio/store.webp';
import IMG3 from '../../assets/Portfolio/RFT_CS.webp';
import IMG4 from '../../assets/Portfolio/social_site.webp';
import IMG5 from '../../assets/Portfolio/c_code.png';
import IMG6 from '../../assets/Portfolio/py_code.webp';

const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Investor Site',
		github: 'https://github.com/David2261/Investor',
		demo: 'https://investingblog.herokuapp.com/',
	},
	{
		id: 2,
		image: IMG2,
		title: 'DV_Business',
		github: 'https://github.com/David2261/DV_Business',
		demo: 'https://github.com/David2261/DV_Business',
	},
	{
		id: 3,
		image: IMG3,
		title: 'RFT_CS',
		github: 'https://github.com/David2261/RFT_CS',
		demo: 'https://github.com/David2261/RFT_CS',
	},
	{
		id: 4,
		image: IMG4,
		title: 'Social Site',
		github: 'https://github.com/David2261/social_site',
		demo: 'https://github.com/David2261/social_site',
	},
	{
		id: 5,
		image: IMG5,
		title: 'Base_C',
		github: 'https://github.com/David2261/Base_C',
		demo: 'https://github.com/David2261/Base_C',
	},
	{
		id: 6,
		image: IMG6,
		title: 'Python_Apps',
		github: 'https://github.com/David2261/Python_Apps',
		demo: 'https://github.com/David2261/Python_Apps',
	},
]


const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className="container portfolio__container">
				{data.map(({id, image, title, github, demo}) =>{
					return (
						<article key={id} className="portfolio__item">
							<div className="portfolio__item-image">
								<img src={image} alt="" />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								<a href={github} className="btn">GitHub</a>
								<a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
							</div>
						</article>
					)
				})}
			
			</div>
		</section>
	)
}


export default Portfolio