import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Login.css"
import loginimage from "../../images/login.png"

const login = () => {
    return (
        <>

            <section className='login'>
                <div className="conatiner login-container">
                    <div className="signup-content login-content">
                        <div >
                            <figure>
                                <img className='login-image' src={loginimage} alt="registraion pic" />
                            </figure>
                            <div className="signin-image-div">
                                <NavLink to="/signin" className="signup-image-link login-image-link">Create an Account</NavLink>
                            </div>
                        </div>


                        <div className="login-form">
                            <h2 className="from-title login-title">Login</h2>
                            <form method="POST" id='register-form' className="login-form">

                                <div class="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="email" name='email' class="form-control" id="email"
                                        // value={email} onChange={(e) => setEmail(e.target.value)}
                                        autoComplete='off' placeholder="Your Email" />
                                </div>

                                <div class="form-group">
                                    <label htmlFor="password">
                                        <i class="fas fa-unlock"></i>
                                    </label>
                                    <input type="password" name='password' class="form-control" id="password"
                                        // value={password} onChange={(e) => setPassword(e.target.value)}
                                        autoComplete='off' placeholder="Your Password" />
                                </div>

                                <div className=" form-login-submit-btn">
                                    <input type="submit"
                                        // onClick={LOGINUSER} 
                                        name='login' id='login' className='form-submit btn' value="signin" />
                                </div>

                            </form>
                        </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default login
