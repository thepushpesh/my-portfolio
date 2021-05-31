import React from 'react'

export default function About() {
    return (
        <div id='about-page'  className='about'>
        <div className="about-inside">
            <div className="about-one">
                <h2><span>01.</span>About Me</h2>
                <p>Hello! My name is Pushpesh and I enjoy building things
                for internet. I started my journey with python and eventually moved
                to web development. When I see a great website I get curious
                how these websites are made from there onwards I stared building 
                things. I try my best to give best interface to user 
                and also by making it beautiful.</p>

                <p>Whenever I get to see a beautiful website I just open the developer
                    tool and try to figure out how this things is created what components 
                    they have used in it, how this animation is working
                    I kinda try to learn how things are done and I am learning Daily new Things!</p>
            </div>
            <div className="square">
                <img src="./images/pushpesh.jpeg" alt="Pushpesh"/>
            </div>
        </div>
        </div>
    )
}
