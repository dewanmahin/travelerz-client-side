import React from 'react';
import beach_img from '../../../images/beach.jpg';
import temple_img from '../../../images/temple.jpg';
import desert_img from '../../../images/desert.jpg';
import forest_img from '../../../images/forest.jpg';
import tower_img from '../../../images/tower.jpg';
import mountain_img from '../../../images/mountain.jpg';
import mosque_img from '../../../images/mosque.jpg';
import waterfall_img from '../../../images/waterfall.jpg';
import './Categories.css'

const Categories = () => {
    return (
        <div className="categories">
            <div className="container">
                <div className="ctrg-title ms-5 mb-5 pb-2">
                    <h2>Categories</h2>
                    <p>Much destinations here but don't be confuse! <br /> It's already grouped by category</p>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-3 col-12">
                        <img src={beach_img} alt="" />
                        <h3>Beach</h3>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src={temple_img} alt="" />
                        <h3>Temple</h3>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src={desert_img} alt="" />
                        <h3>Desert</h3>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src={forest_img} alt="" />
                        <h3>Forest</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-12">
                        <img src={tower_img} alt="" />
                        <h3>Tower</h3>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src={mountain_img} alt="" />
                        <h3>Mountain</h3>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src={mosque_img} alt="" />
                        <h3>Mosque</h3>
                    </div>
                    <div className="col-lg-3 col-12">
                        <img src={waterfall_img} alt="" />
                        <h3>Waterfall</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;