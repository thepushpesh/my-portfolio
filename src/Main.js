import React from 'react'

export default function Main({change}) {
    return (
        <div id='main-page' className='main'>
            <div className="main-inside">
                <span>Hi, my name is</span>
                <h1 className='name'>Pushpesh Sharma.</h1>
                <h1>I build things for the web.</h1>
                <p>I am a self taught Frontend Developer
                    with skilled in solving problems in HTML, CSS, JavaScript 
                    and React. I Focus on being valuable 
                    part in a team or as a Person, I help People, Companies
                    to Accomplish what they need by developing Beautiful and
                    easy Interface sites, And I am kind of person to learn new things..</p>

                <div className="theme">
                    <div onClick={change} data-mode="light" id="light-mode" class="theme-dot"></div>
                    <div onClick={change} data-mode="blue" id="blue-mode" class="theme-dot"></div>
                </div>
                <p id='note'>*Theme settings will be saved for <br /> your next vist</p>
            </div>
        </div>
    )
}
