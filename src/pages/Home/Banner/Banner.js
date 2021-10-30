import React from 'react';
import bannerImg from '../../../images/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="banner-text col-lg-6 col-12">
                        <h1>Travelling towards the <br /> Dawn of the Earth</h1>
                        <p>“There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them” </p>
                        <blockquote>– Jo Walton</blockquote>
                    </div>
                    <div className="banner-img col-lg-6 col-12">
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;