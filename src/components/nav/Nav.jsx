import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {GiMaterialsScience} from 'react-icons/gi';
import {BiWorld, BiMessageRoundedDetail} from 'react-icons/bi';

const [activeNav, setActiveNav] = useState('#');


const Nav = () => {
	return (
		<nav>
			<a href="#" onClick={() => setActivateNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
			<a
				href="#about"
				onClick={() => setActivateNav('#about')}
				className={activeNav === '#about' ? 'active' : ''}
			><AiOutlineUser /></a>
			<a href="#experience"
				onClick={() => setActivateNav('#experience')}
				className={activeNav === '#experience' ? 'active' : ''}
			><GiMaterialsScience /></a>
			<a href="#services"
				onClick={() => setActivateNav('#services')}
				className={activeNav === '#services' ? 'active' : ''}
			><BiWorld /></a>
			<a href="#contact"
				onClick={() => setActivateNav('#contact')}
				className={activeNav === '#contact' ? 'active' : ''}
			><BiMessageRoundedDetail /></a>
		</nav>
	)
}


export default Nav;