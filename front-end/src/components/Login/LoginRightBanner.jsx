import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from '../../actions/userActions';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const LoginRightBanner = ({isLogin, location}) => {

    const [logged, setIsLogin] = useState(isLogin);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    console.log(location);

    const history = useHistory()
    const {loading, userInfo} = useSelector(state => state.user);

    console.log(userInfo);

    if (userInfo&& Object.keys(userInfo).length>0) {
        if (location) {
            console.log(location);
        } else {
            history.push('/');
        }
    }


    const changeLayoutHandler = (e) => {
        setIsLogin((prev)=>!prev);
    }

    const submitLoginHandler = (e) => {
        e.preventDefault();

        dispatch(login(email, password))
    }

    const submitRegisterHandler = (e) => {
        e.preventDefault();

    }

    return (
        <div className="w3l_banner_nav_right">
            <div className="w3_login">
                {loading && (
                    <div className="spinner-grow text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                )}
                <h3>{isLogin ? 'Login' : 'SignUp'}</h3>
                <div className="w3_login_module">
                    <div className="module form-module">
                        <div className='toggle' onClick={changeLayoutHandler}><i className="fa fa-times fa-pencil"/>
                            <div className="tooltip">{isLogin ? 'Sign Up' : 'Login'}</div>
                        </div>
                        {
                            logged ?
                                (<div className="form">
                                    <h2>Login to your account</h2>
                                    <form onSubmit={submitLoginHandler}>
                                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}
                                               name="email" placeholder="Username" required/>
                                        <input type="password" onChange={e => setPassword(e.target.value)}
                                               name="password" value={password} placeholder="Password" required/>
                                        <input type="submit" value="Login"/>
                                    </form>
                                </div>)
                                :
                                (<div className="form">
                                    <h2>Create an account</h2>
                                    <form onSubmit={submitRegisterHandler}>
                                        <input type="text" name="username" placeholder="Username" required=" "/>
                                        <input type="password" name="password" placeholder="Password" required=" "/>
                                        <input type="email" name="email" placeholder="Email Address" required=" "/>
                                        <input type="text" name="phone" placeholder="Phone Number" required=" "/>
                                        <input type="submit" value="Register"/>
                                    </form>
                                </div>)
                        }
                        <div className="cta"><a href="#">Forgot your password?</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LoginRightBanner;
