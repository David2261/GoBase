import React from 'react';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';

const Component = ({ className }) => {
    return (
        <div className="header__socials">
        	<a href="https://www.linkedin.com" target="_blank"><BsLinkedin /></a>
        	<a href="https://www.github.com" target="_blank"><BsGithub /></a>
        	<a href="https://www.instagram.com" target="_blank"><BsInstagram /></a>
        </div>
    );
};

export default Component;
