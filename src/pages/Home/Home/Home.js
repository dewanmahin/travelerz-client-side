import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Destinations from '../Destinations/Destinations';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Destinations></Destinations>
            <Categories></Categories>
        </div>
    );
};

export default Home;