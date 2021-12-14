import React from 'react'
import { NavLink } from 'react-router-dom'
import Signupimage from "../../images/signup.png"
import "./Sign.css"
const Signin = () => {
    return (
        <>
            <section className='signup'>
                <div className="conatiner">

                    <div className="signup-content">

                        <div className="signup-form">
                            <h2 className="from-title">Sign Up</h2>
                            <form method="POST" id='register-form' className="register-form">

                                <div class="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account"></i>
                                    </label>
                                    <input type="text" name='name' class="form-control" id="name"
                                        // value={user.name} onChange={handleInputs}
                                        autoComplete='off' placeholder="Your Name" />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="email" name='email' class="form-control" id="email"
                                        // value={user.email} onChange={handleInputs}
                                        autoComplete='off' placeholder="Your Email" />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone"></i>
                                    </label>
                                    <input type="text" name='phone' class="form-control" id="phone"
                                        // value={user.phone} onChange={handleInputs}
                                        autoComplete='off' placeholder="Your Phone" />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="work">
                                        <i class="far fa-building"></i>
                                    </label>
                                    <input type="text" name='work' class="form-control" id="work"
                                        // value={user.work} onChange={handleInputs}
                                        autoComplete='off' placeholder="Your Profession" />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="password">
                                        <i class="fas fa-unlock"></i>
                                    </label>
                                    <input type="password" name='password' class="form-control" id="password"
                                        // value={user.password} onChange={handleInputs}
                                        autoComplete='off' placeholder="Your Password" />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="fas fa-unlock"></i>
                                    </label>
                                    <input type="password" name='cpassword' class="form-control" id="cpassword"
                                        // value={user.cpassword} onChange={handleInputs}
                                        autoComplete='off' placeholder="Your Confirm Password" />
                                </div>
                                <div className="form-group formsignup-submit-btn ">
                                    <input type="submit" name='signup' id='signup' className='btn'
                                        // onClick={POSTDATA}
                                        value="Register" />
                                </div>

                            </form>
                        </div>
                        <div className="signup-image">
                            <figure>
                                <img className='signupimage' src={Signupimage} alt="registraion pic" />
                            </figure>
                            <div className="signin-image-div">
                                <NavLink to="/login" className="signup-image-link">I am already Register</NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Signin
