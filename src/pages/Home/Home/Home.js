import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Packages from '../Packages/Packages';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Packages></Packages>
            <Categories></Categories>
        </div>
    );
};

export default Home;