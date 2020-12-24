import React from 'react';
import PropTypes from 'prop-types';
import BreadCrumb from "../components/Commons/BreadCrumb";
import LeftBanner from "../components/Commons/LeftBanner";
import EventRightBanner from "../components/EventScreen/EventRightBanner";
import LoginRightBanner from "../components/Login/LoginRightBanner";

const Login = ({location}) => {

    const isLogin = location.search.endsWith("login");

    return (
        <div>
            <BreadCrumb title={'Login'} />
            <div className="banner">
                <LeftBanner/>
                <LoginRightBanner isLogin = {isLogin}/>
                <div className="clearfix"/>

            </div>

        </div>
    );
};

Login.propTypes = {
    
};

export default Login;
