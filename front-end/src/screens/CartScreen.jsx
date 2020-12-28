import React, {useEffect, useState} from 'react';
import store from "../store";
import RowInCart from "../components/CheckoutScreen/RowInCart";
import {useSelector} from "react-redux";
import BreadCrumb from "../components/Commons/BreadCrumb";
import {Link} from "react-router-dom";


import './CartScreen.css';
import {Card, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom';

const data = JSON.parse(localStorage.getItem("cartItems"));
console.log(typeof data);
export const CartContext = React.createContext(null);

const CartScreen = () => {


    const {cartItems, totalPrice} = useSelector(state => state.cart);
    const {userInfo} = useSelector(state => state.user);
    const {id} = userInfo;

    const history = useHistory();

    console.log("Hello " + id)

    const decreaseItem = (id) => {
        console.log('Debugger helloworld')
    }

    const handleCheckOut = (e)=>{
        e.preventDefault();
        if(!id){
            history.push('/login?login');
        }else{
            history.push('/checkout');
        }

    }
    return (
        <div className='d-flex flex-column'>
            <BreadCrumb title={'Cart'}/>
            <Card className='mx-4 my-4 p-3'>
                <div className = 'd-flex flex-column'>
                    <table className="timetable_sub">
                        <thead>
                        <tr>
                            <th>ID Product</th>
                            <th>Product</th>
                            <th>Quality</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        <CartContext.Provider value={{
                            decreaseItem
                        }}>
                            {cartItems.map((item, index) => {

                                return (
                                    <RowInCart
                                        key={item.product}
                                        index={index}
                                        data={item}
                                    />
                                );
                            })}
                        </CartContext.Provider>

                        </tbody>

                    </table>
                    <hr className='my-2 w-75 align-self-end'/>
                    <Row className=''>
                        <Col/>
                        <span className='text-primary ' style={{fontSize: '20px',fontStyle:'bold'}}>{new Intl.NumberFormat('vi-vi', { style: 'currency', currency: 'VND' }).format(totalPrice)}</span>
                        <Col md='1' />
                    </Row>
                </div>
            </Card>
            <Link  to='#'
                  onClick={handleCheckOut}
                  className='btn-primary  my-3 mr-5 py-2 px-2 align-content-end align-self-end'
                  style={{width: "100px" , color: 'white !important'}}> Check Out</Link>
        </div>
    );
};

export default CartScreen;
