import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './BookingDetails.css'
import useAuth from '../../../hooks/useAuth';

const BookingDetails = () => {
    let {_id} = useParams();
    const user = useAuth();

    const [bookingDetails, SetBookingDetails] = useState([]);
    const [singleDtl, setSingleDtl] = useState([])

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.singleItem = singleDtl;
        // console.log(data);
        fetch('https://enigmatic-basin-22776.herokuapp.com/bookings', {
            method: 'POST',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                reset();
                alert("Your booking is confirmed.")
            })
    };

    useEffect(() => {
        fetch('https://enigmatic-basin-22776.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => SetBookingDetails(data))
    }, [])
    
    useEffect(() => {
        const foundDtl = bookingDetails.find(bookingDetail => bookingDetail._id === _id);
        setSingleDtl(foundDtl)
    }, [bookingDetails])

    return (
        <div className="bookingDetails">
            <div className="container">
                <h2 className="m-0 mb-5">Please fill the form for booking confirmation.</h2>
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <img src={singleDtl?.picture} alt="" />
                        <h1>{singleDtl?.name}</h1>
                        <p>{singleDtl?.desc}</p>
                        <h3><span>$</span> {singleDtl?.price}</h3>
                    </div>
                    <div className="col-lg-4 col-12 mt-5 pt-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <input defaultValue={user?.user?.displayName} {...register("userName")} className="form-control py-3 mb-3"/>
                            <input defaultValue={user?.user?.email} {...register("userEmail")} className="form-control py-3 mb-3"/>
                            <input {...register("address")} placeholder="Your Address" className="form-control py-3 mb-3"/>
                            <input type="number" {...register("number")} placeholder="Your Number" className="form-control py-3"/>
                            <input type="submit" value="Confirm" className="btn common-btn mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;