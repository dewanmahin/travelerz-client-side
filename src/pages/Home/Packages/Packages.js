import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data);
                console.log(data)
            })
    }, [])

    return (
        <div className="packages">
            <h2 className="mb-5">Our Packages</h2>
            <div className="container">
                <div className="package-area">
                    {
                        packages.map(package_ => <Package key={package_._id} package={package_}></Package>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Packages;