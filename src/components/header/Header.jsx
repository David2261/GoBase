import React from 'react'
import CTA from "./CTA"
import './header.css'
import ME from "../../assets/Bulat_Moscow.webp"
import HeaderSocial from "./HeaderSocial";


const Header = () => {
	return (
		<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Bulat Nasyrov</h1>
				<h5 className="text-light">Back-end Developer</h5>
				<CTA />
				<HeaderSocial />

				<div className="me">
					<img src={ME} alt="me" />
				</div>

				<a href="#contact" className="scroll__down">Srcoll Down</a>
			</div>
		</header>
	)
}


export default Header