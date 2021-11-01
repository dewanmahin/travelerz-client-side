import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyBooking from '../MyBooking/MyBooking';
import './MyBookings.css'

const MyBookings = () => {
    const [myBookings, setMyBookings] = useState([]);

    const user = useAuth();
    const userEmail = user?.user?.email;

    useEffect(() =>{
        fetch(`https://enigmatic-basin-22776.herokuapp.com/allBookings/${userEmail}`)
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [userEmail]) 

    // Delete Booking
    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `https://enigmatic-basin-22776.herokuapp.com/allBookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        alert('deleted successfully');
                        const remainingBookings = myBookings.filter(restBookings => restBookings._id !== id);
                        setMyBookings(remainingBookings);
                    }
                })
        }
    }

    return (
        <div className="myBookings">
            <h1 className="mb-4">My Bookings</h1>
            <div className="container">
                <div className="myBooking-area">
                    {
                        myBookings.map(myBooking => <MyBooking key={myBooking._id} myBooking={myBooking} handleDelete={handleDeleteBooking}></MyBooking>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyBookings;