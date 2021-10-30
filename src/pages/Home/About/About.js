import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import aboutImg from '../../../images/about.png'
import './About.css'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="about-img col-lg-6 col-12">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="about-txt col-lg-6 col-12">
                        <h4>ABOUT US</h4>
                        <h2>Travel to any corner <br /> of the beautiful world</h2>
                        <p>Our vision is to make travel planning stress free & make travel more fun.Travel is the movement of people between distant geographical locations.</p>
                        <button className="btn common-btn d-flex align-items-center">Explore <FontAwesomeIcon className="ms-1" icon={faSearch}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;