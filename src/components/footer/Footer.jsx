import React from 'react'
import './footer.css'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'


const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">BULAT</a>
			<ul className="permalinks">
				<li><a href="#">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#experience">Experience</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a href="#testimonials">testimonials</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
			<div className="footer__socials">
				<a href="https://www.facebook.com/suleiman.baum">
					<BsFacebook />
				</a>
				<a href="https://instagram.com">
					<BsInstagram />
				</a>
				<a href="https://twitter.com">
					<BsTwitter />
				</a>
			</div>
			<div className="footer__copyright">
				<small>&copy; BULAT NASYROV. All rights reserved {(new Date()).getFullYear()}</small>
			</div>
		</footer>
	)
}


export default Footer