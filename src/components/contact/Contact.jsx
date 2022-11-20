import React, {useRef} from 'react'
import './contact.css'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { BsTelegram, BsFacebook } from 'react-icons/bs'
import emailjs from 'emailjs-com'


const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_se5ofan', 'template_nqh9yaf', form.current, 'x3KT-ynSck-QhVNne');
		e.target.reset()
	}

	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineAlternateEmail className="contact__option-icon" />
						<h4>Email</h4>
						<h5>bulatnasirov2003@gmail.com</h5>
						<a href="mailto:bulatnasirov2003@gmail.com" target="_blank">Send a Message</a>
					</article>
					<article className="contact__option">
						<BsTelegram className="contact__option-icon" />
						<h4>Messanger</h4>
						<h5>Telegram</h5>
						<a href="https://t.me/Suleiman_1" target="_blank">Send a Message</a>
					</article>
					<article className="contact__option">
						<BsFacebook className="contact__option-icon" />
						<h4>Messanger</h4>
						<h5>Facebook</h5>
						<a href="https://www.facebook.com/suleiman.baum" target="_blank">Send a Message</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder="Your Full Name" required />
					<input type="email" name="email" placeholder="Your Email" required />
					<textarea name="message" rows="7" placeholder="Your Message"></textarea>
					<button type="submit" className="btn btn-primary">Send Message</button>
				</form>
			</div>
		</section>
	)
}


export default Contact