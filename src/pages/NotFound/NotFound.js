import React from 'react';
import { Link } from 'react-router-dom';
import error_img from '../../images/404.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound">
            <img src={error_img} alt="" />
            <Link to="/home" className="common-btn btn">Go Back Home</Link>
        </div>
    );
};

export default NotFound;