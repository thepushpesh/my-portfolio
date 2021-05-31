import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
      const [showLinks, setShowLinks] = useState(false);
    //   const toggleLinks = () => {
    //     setShowNav(!showNav);
    // };
    return (
        <div className='navbar' targetOffset='90'>
            <AnchorLink className='logo' href='#main-page'><span>P</span></AnchorLink>
            <div className="menu-btn">
                <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
                    <FaBars />
                </button>
            </div>
            {showLinks && (
            <ul className='main-menu'> 
                <AnchorLink  href='#about-page'><span>01.</span>About</AnchorLink>
                <AnchorLink  href='#project-page'><span>02.</span>Project</AnchorLink>
                <AnchorLink  href='#skills-page'><span>03.</span>Skills & Tools</AnchorLink>
                <AnchorLink  href='#contact-page'><span>04.</span>Contact</AnchorLink>
            </ul>
            )}
        </div>
    )
}
