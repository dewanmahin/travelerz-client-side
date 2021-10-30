import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-info col-lg-4 col-12 text-start">
                        <h2 className="ps-5">Contact Information</h2>
                        <div className="cf  ps-5">
                            <h4>Location -</h4>
                            <p><FontAwesomeIcon className="me-1" icon={faLocationArrow}/> 23 King Street, 5th Road Avenue, California</p>
                        </div>
                        <hr />
                        <div className="cf  ps-5">
                            <h4>Call Us -</h4>
                            <p><FontAwesomeIcon className="me-1" icon={faPhone}/> +1-2355-3345-5</p>    
                        </div>
                        <hr />
                        <div className="cf  ps-5">
                            <h4>Mail Us -</h4>
                            <p><FontAwesomeIcon className="me-1" icon={faEnvelope}/> info@example.com</p>    
                        </div>
                    </div>
                    <div className="contact-form col-lg-8 col-12">
                        <h2>Send Us A Messages</h2>
                        <form className="mb-4">
                            <div className="row g-3 mb-3">
                                <div className="col-lg-6 col-12">
                                    <input type="text" className="form-control py-3" placeholder="Enter Your Name" aria-label="Enter Your Name" />
                                </div>
                                <div className="col-lg-6 col-12">
                                    <input type="email" className="form-control py-3" placeholder="Enter Your Email" aria-label="Enter Your Email" />
                                </div>
                            </div> 
                            <div className="row g-3 mb-3">
                                <div className="col-lg-6 col-12">
                                    <input type="text" className="form-control py-3" placeholder="Enter Your Subject" aria-label="Enter Your Subject" />
                                </div>
                                <div className="col-lg-6 col-12">
                                    <input type="number" className="form-control py-3" placeholder="Enter Your Phone" aria-label="Enter Your Phone" />
                                </div>
                            </div>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                                <label for="floatingTextarea2">Comments</label>
                            </div>
                        </form>
                        <button className="btn common-btn">Submit</button>
                    </div>
                </div>
            </div>
            <div className="contact-map">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102251.87718817175!2d-119.86460118696228!3d36.78565040347537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945de1549e4e9d%3A0x7b12406449a3b811!2sFresno%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1635611054632!5m2!1sen!2sbd" 
                width="100%" 
                height="450" 
                frameborder="0" 
                style={{ border: 0 }}
                allowfullscreen="" 
                loading="lazy" 
                />
            </div>
        </div>
    );
};

export default Contact;