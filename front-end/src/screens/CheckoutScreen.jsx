import React, {createContext} from 'react';
import BreadCrumb from "../components/Commons/BreadCrumb";
import LeftBanner from "../components/Commons/LeftBanner";
import CheckoutRightBanner from "../components/CheckoutScreen/CheckoutRightBanner";
import HorizontalLinearStepper from "../components/CheckoutScreen/Stepper";
import {useDispatch} from "react-redux";

const CheckoutScreen = () => {


    return (
        <div>
            <BreadCrumb title={'Checkout'} />
            <HorizontalLinearStepper />

        </div>
    );
};


export default CheckoutScreen;
