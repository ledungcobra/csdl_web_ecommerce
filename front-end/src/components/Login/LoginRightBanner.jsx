import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from '../../actions/userActions';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {Col, Row} from "react-bootstrap";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const LoginRightBanner = ({isLogin, location}) => {

    const [logged, setIsLogin] = useState(isLogin);
    const history = useHistory()
    const {loading, userInfo,error} = useSelector(state => state.user);


    if (userInfo && Object.keys(userInfo).length > 0) {
        if (location) {
            console.log(location);
        } else {
            history.push('/');
        }
    }

    console.log(location);
    

    const changeLayoutHandler = (e) => {
        setIsLogin((prev) => !prev);
    }

    return (
        <div className="">
            <div className="w3_login">
                <h3>{isLogin ? 'Login' : 'SignUp'}</h3>
                <div className="w3_login_module">
                    <div className="module form-module">
                        <div className='toggle' onClick={changeLayoutHandler}><i className="fa fa-times fa-pencil"/>
                            <div className="tooltip">{isLogin ? 'Sign Up' : 'Login'}</div>
                        </div>
                        {
                            logged ?
                                <LoginForm />
                                :
                               <SignUpForm />
                        }
                        <div className="cta"><a href="#">Forgot your password?</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LoginRightBanner;
