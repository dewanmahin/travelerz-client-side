import { faEnvelope, faPhone, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="sub-nav">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className='d-flex'>
                        <div className='me-4'><FontAwesomeIcon icon={faEnvelope}/> <span className='ms-1'>info@example.com</span></div>
                        <div><FontAwesomeIcon icon={faPhone}/> <span className='ms-1'>+8 12 3456897</span></div>
                    </div>
                    <div className="d-flex align-items-center">
                        {/* {user && <span className="userName"><FontAwesomeIcon style={{color: 'white'}} className='' icon={faUser}/> {user.displayName}</span>}
                        {!user.displayName ? 
                        <span>As a guest</span> :
                        <span>{user.displayName}</span>} */}
                        <span>Unknown</span>
                    </div>
                </div>
            </div>
            <nav className="main-nav navbar navbar-expand-lg bg-light py-3">
                <div className="container">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/home"><img src={logo} alt="" /></Link>
                    {/* Toggle Button */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Nav Links */}
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeStyle={{color: "#DD4E3A"}} className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">My Bookings</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink activeStyle={{color: "#DD4E3A"}} className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        <ul className="login-btn navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item ms-auto">
                                <NavLink className="nav-link" to="/login">Login <FontAwesomeIcon icon={faSignInAlt}/></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;