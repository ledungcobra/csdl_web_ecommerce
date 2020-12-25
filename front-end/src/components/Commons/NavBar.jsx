import React, {useEffect, useState} from 'react'
import Dropdown from "react-bootstrap/Dropdown";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/userActions";

const NavBar = () => {

    const dispatch = useDispatch();
    const {userInfo} = useSelector(state => state.user);

    const [loggedIn,setLoggedIn] = useState(false);

    useEffect(()=>{
        if(userInfo && JSON.stringify(userInfo) !== JSON.stringify({})){
            setLoggedIn(true)
        }
    },[userInfo])
    console.log(userInfo);

    const logoutHandler = () => {
        dispatch(logout());
        window.location.reload();
    }
    return (
        <div className="agileits_header">
            <div className="w3l_offers">
                <a href="products.html">Today's special Offers !</a>
            </div>

            <div className="w3l_search">
                <form action="#" method="post" onChange={() => {
                }}>
                    <input type="text" name="Product" placeholder="Search a product..."/>
                    <input type="submit" value=" "/>
                </form>
            </div>

            <div className="product_list_header">
                <form action="/cart" method="get" className="last">
                    <fieldset>
                        <input type="submit" name="submit" value="View your cart" className="button"/>
                    </fieldset>
                </form>
            </div>
            <div className="w3l_header_right">
                <Dropdown>
                    <Dropdown.Toggle variant='link' className='' style={{color: "white"}}>
                        <span style={{color: "white"}}>
                             <i className='fas fa-user fa-3x' id='dropdown-basic'/>
                        </span>

                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            {loggedIn?
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
            </div>
            <div className="w3l_header_right1">
                <h2><a href="mail.html">Contact Us</a></h2>
            </div>
            <div className="clearfix"/>
        </div>
    )
}

export default NavBar
