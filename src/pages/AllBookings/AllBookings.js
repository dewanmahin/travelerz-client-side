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


    return (
        <div style={{"padding": "90px 0"}}>
            {
                allBookings.map(allBooking => <AllBooking key={allBooking._id} allBooking={allBooking}></AllBooking>)
            }
        </div>
    );
};

export default AllBookings;