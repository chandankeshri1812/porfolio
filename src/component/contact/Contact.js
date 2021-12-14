import React from 'react'
import "./contact.css"
import Contactimg from "../../images/contact.jpg"

const Contact = () => {
    return (
        <>


            <div className="contact-details">
                <div className="contact-details-container">
                    <div className="contact-content">

                        <div className="contact-row">
                            <div className="contact-det-icon">
                                <i class=" zmdi zmdi-email"></i>
                            </div>
                            <div className="contact-det-content">
                                <p className='email-content'>Email</p>
                                <p className='email-contact'>Chandan9876keshri@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-row">
                            <div className="contact-det-icon">
                                <i class=" zmdi zmdi-phone"></i>
                            </div>
                            <div className="contact-det-content">
                                <p className='email-content'>Phone</p>
                                <p className='email-contact'>7488539109</p>
                            </div>
                        </div>

                        <div className="contact-row">
                            <div className="contact-det-icon">

                                <i class="far fa-address-card"></i>
                            </div>
                            <div className="contact-det-content">
                                <p className='email-content'>Address</p>
                                <p className='email-contact'>Saldega,Simdega Ranchi</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <form>
                    

                    <div className="form-group my-2">
                        <label className=" my-1" for="name">Name</label>
                        <input type="text" className="form-control " id="name"  />

                    </div>

                    <div className="form-group my-2">
                        <label className=" my-1" for="email">Email address</label>
                        <input type="text" className="form-control" id="email"  />

                    </div>
                    <div className="form-group my-2">
                        <label className=" my-1" for="address">Enter your phone number</label>
                        <input  className="  form-control" name="phone" id="phone" rows="3" />

                    </div>
                    <div className="form-group my-2">
                        <label className=" my-1" for="address">Enter your address</label>
                        <textarea  className=" myform-contact form-control" name="address" id="address"
                            rows="3"></textarea>
                    </div>

                    <div className="form-group my-2">
                        <label className=" my-1" for="exampleFormControlTextarea1">Any other message...</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                    </div>
                    <button id="submit" className="btn my-2 btn-primary">Submit</button>
                </form>

            </div>

        </>
    )
}

export default Contact