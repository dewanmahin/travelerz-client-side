import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-card col-lg-3 col-12 text-start ps-5">
                            <h4>Travelerz</h4>
                            <p>Enjoy the traveling <br /> with Travelerz <span style={{color: "#DD4E3A", fontWeight: "bold"}}>!</span></p>
                        </div>
                        <div className="footer-card col-lg-3 col-12 text-start ps-5">
                            <h4>Menu</h4>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="footer-card col-lg-3 col-12 text-start ps-5">
                            <h4>Booking Plan</h4>
                            <ul>
                                <li>Personal Trip</li>
                                <li>Group Trip</li>
                            </ul>
                        </div>
                        <div className="footer-card col-lg-3 col-12 text-start ps-5">
                            <h4>Further Information</h4>
                            <ul>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="sub-footer">
                <p className="mb-0 text-center">Copyright &copy; 2021 Travelerz. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;