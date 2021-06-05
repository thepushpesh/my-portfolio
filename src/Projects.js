import { IoLogoGithub, IoMdOpen } from 'react-icons/io';

export default function Projects() {
    return (
        <div id='project-page' className='project'>
            <div className="project-inside">
                <h2><span>02.</span>My work</h2>
                <div className="work">
                    <a href="https://lets-shop.netlify.app" target="_blank">
                        <img className='one' src="./images/shop.png" alt=""/>
                    </a>
                    <div className="description">
                        <h4>1 - Featured Projects</h4>
                        <h3>Let's Shop</h3>
                        <div className="para">
                            <p>A nicer look at the site where you can filter out things read the reviews, with all great hovering effects perfect place to get things.</p>
                        </div>
                            <div className="open">
                                <a href="https://github.com/thepushpesh/let-s-shop" target="_blank"><button><IoLogoGithub/></button></a>
                                <a href="https://lets-shop.netlify.app" target="_blank"><button><IoMdOpen/></button></a>
                            </div>
                    </div>
                </div>
                
                <div className="work">
                    <div className="description1">
                        <h4>2 - Featured Projects</h4>
                        <h3>Twitter mini clone</h3>
                        <div className="para1">
                            <p>A Twitter mini clone where you can tweet, edit your tweet, like it and also can delete it and rest are the dummy things included all the twitter side bar section.</p>
                        </div>
                            <div className="open">
                                 <a href="https://github.com/thepushpesh/twitter-web-app" target="_blank"><button><IoLogoGithub/></button></a>
                                 <a href="https://twitter-mini-clone.netlify.app" target="_blank"><button><IoMdOpen/></button></a>
                            </div>
                    </div>
                    <a href="https://twitter-mini-clone.netlify.app" target="_blank">
                        <img className='two' src="./images/twitter.png" alt=""/>
                    </a>
                </div>

                <div className="work">
                    <a href="https://yourbrand.netlify.app" target="_blank">
                        <img className='one' src="./images/brand.png" alt=""/>
                    </a>
                    <div className="description">
                        <h4>3 - Featured Projects</h4>
                        <h3>Branding</h3>
                        <div className="para">
                            <p>If you want to make yor brand big or want a website for your perfect brand you can give a shot get the best design, art, color to your brand so that it can get more attention.</p>
                        </div>
                            <div className="open">
                                <a href="https://github.com/thepushpesh/branding" target="_blank"><button><IoLogoGithub/></button></a>
                                <a href="https://yourbrand.netlify.app" target="_blank"><button><IoMdOpen/></button></a>
                            </div>
                    </div>
                </div>

                <div className="work">
                    <div className="description1">
                        <h4>4 - Featured Projects</h4>
                        <h3>Paint</h3>
                        <div className="para1">
                            <p>Want to Paint your new beautiful house just choose the best products from out store, get our customers reviews to get a better idea.</p>
                        </div>
                            <div className="open">
                                <a href="https://github.com/thepushpesh/paint" target="_blank"><button><IoLogoGithub/></button></a>
                                <a href="https://painthome.netlify.app" target="_blank"><button><IoMdOpen/></button></a>
                            </div>
                    </div>
                    <a href="https://painthome.netlify.app" target='_blank'>
                        <img className='two' src="./images/paint.png" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}
