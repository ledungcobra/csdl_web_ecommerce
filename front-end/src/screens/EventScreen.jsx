import React from 'react';
import LeftBanner from "../components/Commons/LeftBanner";
import BreadCrumb from "../components/Commons/BreadCrumb";
import EventRightBanner from "../components/EventScreen/EventRightBanner";


const EventScreen = () => {
    return (
        <div>
            <BreadCrumb title={'About'} />
            <div className="banner">
                <LeftBanner/>
                <EventRightBanner />
                <div className="clearfix"/>

            </div>

        </div>
    );
};



export default EventScreen;
