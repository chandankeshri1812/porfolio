import React, { useState } from 'react'
import "./project.css"
import logo from '../../images/logo.png'
import Myproject from './Myproject'
import { ProjectApi } from './projectAPi'
const Project = () => {


    const [data, setData] = useState(ProjectApi);
    return (
        <>
            <div className="project m-auto my-90">
        
                    {/* <h1>Project</h1> */}
                    <div className="project-row">

                        {
                            data.map((currElem) => {
                                const { id } = currElem;
                                return <Myproject key={id} {...currElem} />
                            })
                        }
                    </div>
               
            </div>
        </>
    )
}

export default Project
