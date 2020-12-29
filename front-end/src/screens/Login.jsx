import React from 'react';
import BreadCrumb from "../components/Commons/BreadCrumb";
import LeftBanner from "../components/Commons/LeftBanner";
import LoginRightBanner from "../components/Login/LoginRightBanner";

const Login = ({location}) => {

    const isLogin = location.search.includes("login");

    return (
        <div>
        <BreadCrumb title={'Login'} />
            <div className="banner">
                <LoginRightBanner isLogin = {isLogin}/>
                <div className="clearfix"/>

            </div>
        </div>
    );
};

Login.propTypes = {
    
};

export default Login;
