import React from 'react'
import './main.css'
import logo from "../../images/logo.png"

const Main = () => {
    return (
        <>


            <section className='main'>
                <div className="main-logo">
                    <figure>
                        <img className='mainlogo' src={logo} alt="logo" />
                    </figure>
                </div>
                <div className="main-content">
                    <div className="main-container">
                        <div className="text">I'm a</div>
                        <ul className="option">
                            <li><span>Web Developer</span></li>
                            <li><span>Programmer</span></li>
                            <li><span>Graphic Designer</span></li>
                            <li><span>Photographer</span></li>
                        </ul>
                    </div>
                </div>


                <div className="main-description">
                    <p>An incessant learner and A keen observer, Skilled in Web Development and solving Math Problems. Always ready to learn something new and apply it in real life Scenarios.</p>
                </div>
                <div className="main-button">
                    <button className='btn' >My Skills</button>
                    <button className='btn' >My Interest</button>
                    <button className='btn' >My Project</button>
                </div>
            </section>



            {/* section 01 */}
            <section className='section-2main'>
                <div className="section-2-about">
                    <div className="about-2-container">

                        <div className="about-2-row">
                            <div className="icon-about">
                                <i class="fas fa-window-maximize"></i>
                            </div>
                            <p>Web Development</p>
                        </div>

                        <div className="about-2-row">
                            <div className="icon-about">
                                <i class="fas fa-camera"></i>
                            </div>
                            <p>Photography</p>
                        </div>

                        <div className="about-2-row">
                            <div className="icon-about">
                                <i class="fas fa-calculator"></i>
                            </div>
                            <p>Mathematics</p>
                        </div>

                        <div className="about-2-row">
                            <div className="icon-about">
                                <i class="fas fa-laptop-code"></i>
                            </div>
                            <p>Coder</p>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default Main
