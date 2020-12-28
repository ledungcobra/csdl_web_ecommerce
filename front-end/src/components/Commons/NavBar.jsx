import React, { useEffect, useState } from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

import './NavBar.css'
import axios from "axios";
const NavBar = () => {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.user);
    const { cartItems } = useSelector(state => state.cart);

    const [keyword, setKeyword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if (userInfo && JSON.stringify(userInfo) !== JSON.stringify({})) {
            setLoggedIn(true)
        }
    }, [userInfo])

    const logoutHandler = () => {
        //Put cart into server when user logout

        dispatch(logout());



    }
    return (
        <div className="agileits_header">
            <div className="w3l_search">
                <form action="/search" method="get" onChange={() => {
                }}>
                    <input type="text" name="keyword" placeholder="Search a product..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <input type="hidden" name="page" value='1' />
                    <input type="hidden" name="limit" value='20' />
                    <input type="submit" value=" " />
                </form>
            </div>

            <div className="product_list_header">
                <form action="/cart" method="get" className="last">
                    <fieldset style={{ position: "relative" }}>
                        <input type="submit" name="submit" value="View your cart" className="button" />
                        <span id='cart-count'>1</span>
                    </fieldset>
                </form>
            </div>
            <div className="w3l_header_right">
                <Row className='d-flex align-items-baseline justify-content-center'>
                    {loggedIn && userInfo && userInfo.name &&
                        <Col>
                            <span>Hi {userInfo.name}</span>
                        </Col>
                    }
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant='link' className='' style={{ color: "white" }}>
                                <span style={{ color: "white" }}>
                                    <i className='fas fa-user fa-3x' id='dropdown-basic' />
                                </span>

                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    {loggedIn ?
                                        <Link to='/profile'>Profile</Link>
                                        :
                                        <Link to='/login?login'>Login</Link>}
                                </Dropdown.Item>
                                <Dropdown.Item href="/login?signup">Sign Up</Dropdown.Item>
                                {
                                    loggedIn && <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>


            </div>

            <div className="clearfix" />
        </div>
    )
}

export default NavBar
