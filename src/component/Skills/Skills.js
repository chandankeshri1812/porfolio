import React from 'react'
import "./Skills.css"
import psoc from "../../images/psoc.jfif"
import naps from "../../images/naps.png"
import leo from "../../images/leo.png"
import nss from "../../images/nss.png"

function Skills() {
    return (
        <>
            {/* section 01 */}
            <section className='sectionskill'>
                <div className="section-1-skills">
                    <div className="skill-2-container">

                        <div className="skill-2-row">
                            <div className="icon-skill">
                                <i class="far fa-file-code"></i>
                            </div>
                            <p>HTML</p>
                        </div>

                        <div className="skill-2-row">
                            <div className="icon-skill">
                                <i class="fab fa-css3"></i>
                            </div>
                            <p>CSS</p>
                        </div>

                        <div className="skill-2-row">
                            <div className="icon-skill">
                                <i class="fab fa-js"></i>
                            </div>
                            <p>JAAVASCRIPT</p>
                        </div>

                        <div className="skill-2-row">
                            <div className="icon-skill">
                                <i class="fab fa-bootstrap"></i>
                            </div>
                            <p>BOOTSTRAP</p>
                        </div>
                        <div className="skill-2-row">
                            <div className="icon-skill">
                                <i class="fab fa-react"></i>
                            </div>
                            <p>REACT JS</p>
                        </div>
                        <div className="skill-2-row">
                            <div className="icon-skill">
                                <i class="fab fa-node-js"></i>
                            </div>
                            <p>NODE JS</p>
                        </div>

                        <div className="skill-2-row">
                            <div className="icon-skill">
                                <i class="fas fa-database"></i>
                            </div>
                            <p>MONGODB</p>
                        </div>
                        <div className="skill-2-row">
                            <div className="icon-skill">
                                <i class="fas fa-eye-dropper"></i>
                            </div>
                            <p>GRAPHIC DESIGNER</p>
                        </div>

                        <div className="skill-2-row">
                            <div className="icon-skill">
                                <i class="fas fa-image"></i>
                            </div>
                            <p>PHOTOSHOP</p>
                        </div>

                        <div className="skill-2-row">
                            <div className="icon-skill">
                                <i class="fab fa-cuttlefish"></i>
                            </div>
                            <p>C</p>
                        </div>

                        <div className="skill-2-row">
                            <div className="icon-skill">
                                <i class="fas fa-code"></i>
                            </div>
                            <p>C++</p>
                        </div>

                        <div className="skill-2-row">
                            <div className="icon-skill">
                            <i class="fab fa-java"></i>
                            </div>
                            <p>JAVA</p>
                        </div>

                    </div>
                </div>
            </section>



            {/* section skills 01*/}
            <section>
                <div className="skill-sec-2">
                    <div className="skill-sec-2-container">
                        <h2>EXPERIENCE</h2>
                        <div className="skill-sec-01-col">

                            <div className="skill-sec-01-row">
                                <div className="skill-01-content">
                                    <h3>News and Publication Society</h3>
                                    <h4>Web Developer And Graphic Designer</h4>
                                    <h5>Bit MESRA, Ranchi, Jharkhand</h5>
                                    <h6>JULY,2021 - Present</h6>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quisquam aspernatur tenetur obcaecati veritatis sequi.</p>
                                </div>
                                <div className="skill-01-img">
                                    <img src={naps} alt="" />
                                </div>
                            </div>

                            <div className="skill-sec-01-row">
                                <div className="skill-01-img">
                                    <img src={psoc} alt="" />
                                </div>
                                <div className="skill-01-content">
                                    <h3>News and Publication Society</h3>
                                    <h4>Web Developer And Graphic Designer</h4>
                                    <h5>Bit MESRA, Ranchi, Jharkhand</h5>
                                    <h6>JULY,2021 - Present</h6>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quisquam aspernatur tenetur obcaecati veritatis sequi.</p>
                                </div>
                            </div>


                            <div className="skill-sec-01-row">

                                <div className="skill-01-content">
                                    <h3>News and Publication Society</h3>
                                    <h4>Web Developer And Graphic Designer</h4>
                                    <h5>Bit MESRA, Ranchi, Jharkhand</h5>
                                    <h6>JULY,2021 - Present</h6>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quisquam aspernatur tenetur obcaecati veritatis sequi.</p>
                                </div>

                                <div className="skill-01-img">
                                    <img src={nss} alt="" />
                                </div>
                            </div>


                            <div className="skill-sec-01-row">
                                <div className="skill-01-img">
                                    <img src={leo} alt="" />
                                </div>
                                <div className="skill-01-content">
                                    <h3>News and Publication Society</h3>
                                    <h4>Web Developer And Graphic Designer</h4>
                                    <h5>Bit MESRA, Ranchi, Jharkhand</h5>
                                    <h6>JULY,2021 - Present</h6>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quisquam aspernatur tenetur obcaecati veritatis sequi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
