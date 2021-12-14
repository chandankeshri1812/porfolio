import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from "../../images/logo.png"

const Navbar = () => {
    return (
        <>
            <nav className="navbar  navbar-expand-lg navbar-dark" style={{ background: "black" }}>
                <NavLink className="navbar-brand mx-3" to="/"><img src={logo} alt="" width="40px" /></NavLink>

                <button className="navbar-toggler mx-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mx-3">
                        <li className="nav-item ">
                            <NavLink className="nav-link nav_link " to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav_link " to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav_link " to="/skills">Skills</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav_link  " to="/project">Project</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav_link " to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav_link " to="/signin">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav_link " to="/login">Login</NavLink>
                        </li>
                    </ul>


                </div>
            </nav>
        </>
    )
}

export default Navbar
