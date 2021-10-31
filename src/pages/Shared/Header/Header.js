import { faEnvelope, faPhone, faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        <div className="header">
            <div className="sub-nav">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className='d-flex'>
                        <div className='me-4'><FontAwesomeIcon icon={faEnvelope}/> <span className='ms-1'>info@example.com</span></div>
                        <div><FontAwesomeIcon icon={faPhone}/> <span className='ms-1'>+8 12 3456897</span></div>
                    </div>
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon style={{color: 'white'}} className='me-2' icon={faUser}/>
                        {!user.displayName ? 
                        <span>Account</span> :
                        <span>{user.displayName}</span>}
                    </div>
                </div>
            </div>
            <nav className="main-nav navbar navbar-expand-lg py-3">
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
                            {!user.displayName ? <span style={{display: "none"}}></span> : 
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/myBookings">My Bookings</NavLink>
                                </li>
                            }
                            <li className="nav-item">
                                <NavLink activeStyle={{color: "#DD4E3A"}} className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                        <ul className="login-btn navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item ms-auto">
                                {!user.displayName ? 
                                <NavLink className="nav-link" to="/login">Login<FontAwesomeIcon className="ms-2" icon={faSignInAlt}/></NavLink> :
                                <button onClick={logOut} className="nav-link">Log Out<FontAwesomeIcon className="ms-2" icon={faSignOutAlt}/></button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;