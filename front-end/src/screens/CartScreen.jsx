import React, {useEffect, useState} from 'react';
import store from "../store";
import RowInCart from "../components/CheckoutScreen/RowInCart";
import {useSelector} from "react-redux";


const data = JSON.parse( localStorage.getItem("cartItems"));
console.log(typeof data);
export const CartContext = React.createContext(null);

const CartScreen = () => {



    const {cartItems} = useSelector(state=>state.cart);

    const decreaseItem = (id)=>{
        console.log('Debugger helloworld')
    }

    console.log('Render cart screen');

    return (
        <div>
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
        </div>
    );
};

export default CartScreen;
