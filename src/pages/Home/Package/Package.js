import React from 'react';
import { NavLink } from 'react-router-dom';
import './Package.css'

const Package = (props) => {
    const {_id, picture, name, desc, price} = props.package;

    return (
        <div>
            <div className="card text-start">
                <div className="card-img">
                    <img src={picture} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body p-0 py-3">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{desc}</p>
                    <h4><span>$</span> {price}</h4>
                </div>
                <div className="card-footer btn common-btn">
                    <NavLink to={`/bookingdtl/${_id}`} className="book-btn">Book Now</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Package;