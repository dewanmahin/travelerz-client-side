import { faLocationArrow, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AllBooking.css'

const AllBooking = (props) => {
    const {address, number, userName, singleItem} = props.allBooking;

    return (
        <div className="allBooking">
            <div className="container">
                <div className="ab-card d-flex justify-content-between align-items-center mb-5">
                    <img src={singleItem?.picture} alt="" />
                    <h1>{singleItem?.name}</h1>
                    <h4><FontAwesomeIcon icon={faUser}/> {userName}</h4>
                    <p className="address"><FontAwesomeIcon icon={faLocationArrow}/> {address}</p> 
                    <p className="number"><FontAwesomeIcon icon={faPhone}/> {number}</p>
                </div>
            </div>
        </div>
    );
};

export default AllBooking;