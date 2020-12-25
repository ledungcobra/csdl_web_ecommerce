import React, {useState} from 'react';
import {login} from "../../actions/userActions";
import {useDispatch, useSelector} from "react-redux";

const LoginForm = ()=> {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {loading, userInfo} = useSelector(state => state.user);


    const submitLoginHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (<div className="form">
        <h2>Login to your account</h2>
        <form onSubmit={submitLoginHandler}>
            <input type="text" onChange={(e) => setEmail(e.target.value)} value={email}
                   name="email" placeholder="Username" required/>
            <input type="password" onChange={e => setPassword(e.target.value)}
                   name="password" value={password} placeholder="Password" required/>
            <input type="submit" value="Login"/>
        </form>
        {loading && (
            <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )}
    </div>);
};

LoginForm.propTypes = {};

export default LoginForm;
