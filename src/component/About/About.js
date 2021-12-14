import React from 'react'
import logo from "../../images/mypic.jpeg"
import bit from "../../images/bit.png"
import dav from "../../images/dav.png"
import st from "../../images/st.png"
import cricket from "../../images/cricket.jpg"
import chess from "../../images/chess.jpg"
import coder from "../../images/coder.jpg"
import math from "../../images/math.jpg"

import photographer from "../../images/photogher.jpg"
import badiminton from "../../images/badiminton.jpg"
import investor from "../../images/investor.jpg"

import "./about.css"
const About = () => {
    return (
        <>

            <div className="main-about my-90 m-auto">
                <div className="about-container">
                    <div className="about-content-container">
                        <div className="about-image">
                            <figure>
                                <img className='aboutimg' src={logo} alt="" />
                            </figure>
                        </div>
                        <div className="about-content">
                            <h4>Chandan Keshri</h4>
                            <h5>Web Developer</h5>
                            <p>I am a 2nd-year undergraduate pursuing IMSc in Mathematics and Computing at Birla Institute of Technology, Ranchi. Since my 2nd year in college.I have been exploring and Learning Mern Stack Web Development and Graphic Designing.</p>
                            <button className='btn'>Read More</button>
                            <button className='btn'>Open CV</button>
                        </div>
                    </div>
                </div>



                {/* section3 */}
                <section>
                    <div className="section-about-3">
                        <div className="section-3-about-container">
                            <h1>EDUCATION</h1>
                            <div className="about-educ-col">

                                <div className="about-educ-row-1">
                                    <div className="image-educ-row-1">
                                        <img src={bit} alt="" />
                                    </div>
                                    <div className="about-sec-3-content">
                                        <h4>Birla Institute of Technology, Mesra</h4>
                                        <h5>Integrated Master of Science in Mathematics and Computing</h5>
                                        <h6>2020-2025</h6>
                                        <p className='marksforclg'>8.8 CGPA</p>
                                        <p>I am a 2nd-year undergraduate pursuing IMSc in Mathematics and Computing at Birla Institute of Technology, Ranchi. Since my 2nd year in college.</p>
                                    </div>
                                </div>

                                <div className="about-educ-row-1">
                                    <div className="image-educ-row-1">
                                        <img src={dav} alt="" />
                                    </div>
                                    <div className="about-sec-3-content">
                                        <h4>Dav Public School</h4>
                                        <h5>Class : 11th and 12th</h5>
                                        <h6>2018-2020</h6>
                                        <p className='marksforclg'>92 % In Class 12th</p>
                                        <p>I am a 2nd-year undergraduate pursuing IMSc in Mathematics and Computing at Birla Institute of Technology, Ranchi. Since my 2nd year in college.</p>
                                    </div>
                                </div>



                                <div className="about-educ-row-1">
                                    <div className="image-educ-row-1">
                                        <img src={st} alt="" />
                                    </div>
                                    <div className="about-sec-3-content">
                                        <h4>St John School</h4>
                                        <h5>Class : Nursery to 10th</h5>
                                        <h6>2006-2018</h6>
                                        <p className='marksforclg'>80.3 % In Class 10th</p>
                                        <p>I am a 2nd-year undergraduate pursuing IMSc in Mathematics and Computing at Birla Institute of Technology, Ranchi. Since my 2nd year in college.</p>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </section >

            </div >

            {/* section-04 */}

            <section>
                <div className="section-about-4">
                    <div className="section-4-about-container">
                        <h1 className='section-4-heading'>INTEREST</h1>
                        <div className="about-two-04-main-row">


                            <div className="about-04-col">
                                <div className="about-04-image">
                                    <img src={cricket} alt="" />
                                </div>
                                <div className="about-04-image">
                                    <img src={chess} alt="" />
                                </div>
                                <div className="about-04-image">
                                    <img src={coder} alt="" />
                                </div>
                                <div className="about-04-image">
                                    <img src={math} alt="" />
                                </div>
                                {/* <div className="about-04-image">
                                    <img src={investor} alt="" />
                                </div> */}
                            </div>

                          

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
