import React from 'react';
import BreadCrumb from "../components/Commons/BreadCrumb";
import LeftBanner from "../components/HomeScreen/LeftBanner";
import CheckoutRightBanner from "../components/CheckoutScreen/CheckoutRightBanner";

const PaymentScreen = () => {
    return (
        <div>
            <BreadCrumb title={'Checkout'} />
            <div className="banner">
                <LeftBanner/>
                <CheckoutRightBanner />
                <div className="clearfix"/>
            </div>
        </div>
    );
};

export default PaymentScreen;