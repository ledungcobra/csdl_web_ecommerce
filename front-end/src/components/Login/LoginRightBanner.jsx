import React, {useState} from 'react';

const LoginRightBanner = ({isLogin: login}) => {

    const [isLogin, setIsLogin] = useState(login);

    const changeLayoutHandler = (e)=>{
        setIsLogin(!isLogin);
    }
    return (
        <div className="w3l_banner_nav_right">
            <div className="w3_login">
                <h3>{isLogin ? 'Login' : 'SignUp'}</h3>
                <div className="w3_login_module">
                    <div className="module form-module">
                        <div className='toggle' onClick={changeLayoutHandler}><i className="fa fa-times fa-pencil"/>
                            <div className="tooltip">{isLogin ? 'Sign Up' : 'Login'}</div>
                        </div>
                        {
                            isLogin ?
                                (<div className="form">
                                    <h2>Login to your account</h2>
                                    <form action="#" method="post">
                                        <input type="text" name="username" placeholder="Username" required=" "/>
                                        <input type="password" name="password" placeholder="Password" required=" "/>
                                        <input type="submit" value="Login"/>
                                    </form>
                                </div>)
                                :
                                (<div className="form">
                                    <h2>Create an account</h2>
                                    <form action="#" method="post">
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
