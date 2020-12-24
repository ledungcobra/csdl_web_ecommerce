import React from 'react';
import LeftBanner from "../components/Commons/LeftBanner";
import ProductRightBanner from "../components/ProductsScreen/ProductsRightBanner";
import BreadCrumb from "../components/Commons/BreadCrumb";
import AboutRightBanner from "../components/AboutScreen/AboutRightBanner";
import TeamGallery from "../components/AboutScreen/TeamGallery";

const AboutScreen = () => {
    return (
        <div>
            <BreadCrumb title={'About'} />
            <div className="banner">
                <LeftBanner/>
                <AboutRightBanner />
                <div className="clearfix"/>
                <TeamGallery />
            </div>
        </div>
    );
};



export default AboutScreen;
