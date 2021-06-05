import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter} from 'react-icons/fi'
export default function Contact() {
    return (
        <div id='contact-page' className='contact'> 
            <div className="contact-inside">
                <h2>04. What's Next ?</h2>
                <h1>Get In Touch</h1>
                <p>Although I'm currently looking for new opportunities 
                    to get a better understanding of the tech world, my
                     inbox is always open. Whether you have a question 
                     or just want to say hi, I'll try my best to get back 
                     to you ASAP!</p>
                <div className="connect">
                    <a href="https://github.com/thepushpesh" target="-blank"><button><FiGithub/></button></a>
                    <a href="https://www.linkedin.com/in/pushpesh-sharma/" target="-blank"><button><FiLinkedin/></button></a>
                    <a href="https://twitter.com/thepushpesh" target="-blank"><button><FiTwitter/></button></a>
                </div>
                <p className="email">pushpeshsharmaa@gmail.com</p>
                <p className='design'>Designed & Built by Pushpesh Sharma</p>
            </div>
        </div>
    )
}
 