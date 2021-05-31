import React, { useState } from 'react'
import {Tools} from './Data';

export default function Skills() {
    const[tools, setTools] = useState(Tools);
    return (
        <div id='skills-page' className='skills'>
            <div className="skills-inside">
                <h2><span>03.</span>SKILLS & TOOLS</h2>
                <div className="ido">
                    <h3>My Toolbox & Things I Can Do</h3>
                    <p>The skills, tools and technologies I use to bring your product to life.</p>
                    {tools.map((item) => {
                        const {name, img} = item;
                    return (
                        <div className='icons-name'>
                            <div className="logo">
                                <li>{img}</li>
                                <p>{name}</p>
                            </div>
                        </div>
                        )   
                    })}
                    <h4>Currently working on.</h4>
                    <p>Improving my skills in Wordpress, API and Also, getting better in Designing & JavaScript</p>
                </div>
            </div>
        </div>
    )
}
