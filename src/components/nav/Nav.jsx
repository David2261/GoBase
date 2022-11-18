import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {GiMaterialsScience} from 'react-icons/gi';
import {BiWorld, BiMessageRoundedDetail} from 'react-icons/bi';



const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');
	return (
		<nav>
			<a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
			<a
				href="#about"
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			><AiOutlineUser /></a>
			<a href="#experience"
				onClick={() => setActiveNav('#experience')}
				className={activeNav === '#experience' ? 'active' : ''}
			><GiMaterialsScience /></a>
			<a href="#services"
				onClick={() => setActiveNav('#services')}
				className={activeNav === '#services' ? 'active' : ''}
			><BiWorld /></a>
			<a href="#contact"
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			><BiMessageRoundedDetail /></a>
		</nav>
	)
}


export default Nav;