import React, {useEffect, useState} from 'react';
import store from "../store";
import RowInCart from "../components/CheckoutScreen/RowInCart";
import {useSelector} from "react-redux";
import BreadCrumb from "../components/Commons/BreadCrumb";
import {Link} from "react-router-dom";


import './CartScreen.css';
import {Col, Row} from "react-bootstrap";

const data = JSON.parse( localStorage.getItem("cartItems"));
console.log(typeof data);
export const CartContext = React.createContext(null);

const CartScreen = () => {



    const {cartItems,totalPrice} = useSelector(state=>state.cart);
    const {userInfo:{id}} = useSelector(state=>state.user);

    console.log("Hello "+ id)

    const decreaseItem = (id)=>{
        console.log('Debugger helloworld')
    }



    return (
        <div className='d-flex flex-column'>
            <BreadCrumb title={'Cart'} />
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
                                key = {item.product}
                                index = {index}
                                data ={item}
                            />
                        );
                    })}
                </CartContext.Provider>

                </tbody>
            </table>
            <Row>
                <Col/>
                <Col md={3}>
                    {totalPrice}
                </Col>

            </Row>
            <Link to={'/checkout'}  className='btn-primary my-3 mr-5 py-2 px-2 align-content-end align-self-end' style={{width:"100px"}}> Check Out</Link>
        </div>
    );
};

export default CartScreen;
