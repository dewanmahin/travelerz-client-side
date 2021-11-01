import React, { useEffect, useState } from 'react';
import AllBooking from '../AllBooking/AllBooking';
import './AllBookings.css'

const AllBookings = () => {
    const [allBookings, setAllBookings] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allBookings')
            .then(res => res.json())
            .then(data => setAllBookings(data))
    }, [])

    // Delete Booking
    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/allBookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        alert('deleted successfully');
                        const remainingBookings = allBookings.filter(restBookings => restBookings._id !== id);
                        setAllBookings(remainingBookings);
                    }
                })
        }
    }


    return (
        <div style={{"padding": "90px 0"}}>
            <h1 className="mb-4">AllBookings</h1>
            {
                allBookings.map(allBooking => <AllBooking key={allBooking._id} allBooking={allBooking} handleDelete={handleDeleteBooking}></AllBooking>)
            }
        </div>
    );
};

export default AllBookings;