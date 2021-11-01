import React from 'react';
import './MyBooking.css'

const MyBooking = (props) => {
    const {_id, singleItem} = props.myBooking;

    return (
        <div className="myBooking">
            <div className="card">
                <img src={singleItem?.picture} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h2 className="card-title">{singleItem?.name}</h2>
                    <p className="card-text">{singleItem?.desc}</p>
                    <h4 className="card-text"><span>$</span> {singleItem?.price}</h4>
                    <button onClick={() => {props.handleDelete(_id)}} className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;