import React from 'react';
import BreadCrumb from "../components/Commons/BreadCrumb";
import LeftBanner from "../components/HomeScreen/LeftBanner";
import AboutRightBanner from "../components/AboutScreen/AboutRightBanner";
import TeamGallery from "../components/AboutScreen/TeamGallery";
import ServicesRightBanner from "../components/ServicesScreen/ServicesRightBanner";

const ServicesScreen = () => {
    return (
        <div>
            <BreadCrumb title={'Services'} />
            <div className="banner">
                <LeftBanner/>
                <ServicesRightBanner />
                <div className="clearfix"/>
            </div>

        </div>
    );
};

export default ServicesScreen;
