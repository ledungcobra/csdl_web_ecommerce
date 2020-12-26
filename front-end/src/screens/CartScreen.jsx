import React, {useEffect, useState} from 'react';
import store from "../store";
import RowInCart from "../components/CheckoutScreen/RowInCart";


const data = JSON.parse( localStorage.getItem("cartItems"));
console.log(typeof data);

const CartScreen = () => {

    const [dataState,setDataState] = useState(data);
    useEffect(()=>{
        setTimeout(()=>{setDataState(JSON.parse(localStorage.getItem("cartItems")));},500);
    },[])
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
                {dataState.map((item, index) => {

                    return (
                        <RowInCart
                            key = {index}
                            index = {index}
                            data ={item}
                        />
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default CartScreen;
