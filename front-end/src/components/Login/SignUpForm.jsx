import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {userRegister} from "../../actions/userActions";
import Message from "../Commons/Message";
import Loader from "../Commons/Loader";

const SignUpForm = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const [birthday, setBirthday] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [success,setSuccess] = useState(false);
    const {loading, userInfo, error} = useSelector(state => state.userRegister);

    const [formData,setFormData] = useState({});


    const dispatch = useDispatch();

    useEffect(()=>{

        if(userInfo && JSON.stringify(userInfo)!==JSON.stringify({})){
            setSuccess(true);
        }

    },[userInfo]);

    const submitRegisterHandler = (e) => {
        e.preventDefault();
        dispatch(userRegister(username, email, password, birthday, gender, phoneNumber));
    }

    return (<div className="form">
        <h2>Create an account</h2>
        <form onSubmit={submitRegisterHandler}>
            <input type="text" name="username" placeholder="Username" required=" "
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
            />
            <input autoComplete type="email" name="email" placeholder="Email Address" required=" "
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" name="password" placeholder="Password" required=" "
                   onChange={(e) => setPassword(e.target.value)}
                   value={password}
            />
            <input type="password" name="rePassword" placeholder="Re password"
                   required=" "
                   onBlur={(e) => {
                       if (e.target.value !== password) {
                           setShowError(true);
                       } else {
                           setShowError(false);
                       }
                   }}
                   onChange={(e) => setRePassword(e.target.value)}
                   value={rePassword}
            />
            {
                <Message variant={'text-danger'} message='Password does not match' show={showError}/>
            }
            <input type="text" name="phoneNumber" placeholder="Phone Number" required=" "
                   onChange={(e) => setPhoneNumber(e.target.value)}
                   value={phoneNumber}
            />
            <input style={{display: "block", width: "100%"}} type="date" name="birthday"
                   placeholder="Birthday" required=" "
                   onChange={(e) => setBirthday(e.target.value)}
                   value={birthday}
            />
            <Row>
                <Col md={6}/>
                <Col>
                    <select className='form-control my-2 mb-3' style={{display: "block"}}
                            onChange={(e) => {
                                setGender(e.target.value)
                            }}
                    >
                        <option value='0' name='gender'>Female</option>
                        <option value='1' name='gender'>Male</option>
                    </select>
                </Col>
            </Row>
            <input disabled={showError} type="submit" value="Register"/>
        </form>
        {<Loader loading={loading}/>}
        {<Message
            variant={error ? 'text-danger' : 'text-success'}
            message={error? error: 'Sign Up success'}
            show = {error||success}
        />}
    </div>)
};


export default SignUpForm;
