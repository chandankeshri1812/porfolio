import React, { useState } from 'react';
import "./project.css"
import { NavLink } from 'react-router-dom'

const Myproject =
    ({ image, projectName, description, More }) => {

        return (
            <>

                <div className="card card-proj" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top proj-image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{projectName}</h5>
                        <p className="card-text">{description}</p>
                        <a href={More} target="_blank" className="btn btn-primary">Visit Project</a>
                    </div>
                </div>


            </>
        );
    }

export default Myproject;