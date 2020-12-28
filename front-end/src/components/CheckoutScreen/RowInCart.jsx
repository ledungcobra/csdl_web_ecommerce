import React, {useState, useEffect, useContext} from "react";
import {addToCart, reduceToCart, removeFromCart} from "../../actions/cartActtions";
import {useDispatch} from "react-redux";
import {CartContext} from "../../screens/CartScreen";

const RowInCart = ({data, index, disabledControl = false}) => {
    const [dataState, setDataState] = useState(data);

    const RemoveItemCartHandler = (e) => {
        e.preventDefault();
        dispatch(removeFromCart(data.product));

        console.log(data.name)

    }

    const ReduceQtyItem = (e) => {
        e.preventDefault();
        dispatch(reduceToCart(data.product));

    }

    const dispatch = useDispatch();


    const addToCartHandler = (e) => {
        e.preventDefault();
        dispatch(addToCart(data.product));


    }

    return (
        <tr key={data.product}>
            <td className="invert">{index + 1}</td>
            <td className="invert-image"><a href=""><img src={dataState.image} alt=" "
                                                         className="img-responsive"/></a>
            </td>
            <td className="invert">
                <div className="quantity">
                    <div className="quantity-select">
                        {!disabledControl && <div className="entry value-minus" onClick={ReduceQtyItem}>&nbsp;</div>}
                        <div className="entry value"><span>{dataState.qty}</span></div>
                        {!disabledControl &&
                        <div className="entry value-plus active" onClick={addToCartHandler}>&nbsp;</div>}
                    </div>
                </div>
            </td>
            <td className="invert" style={{"width": "600px"}}>{dataState.name}</td>
            <td className="invert">{new Intl.NumberFormat('vi-vi', {
                style: 'currency',
                currency: 'VND'
            }).format(Math.floor(dataState.price * dataState.qty * (100 - dataState.discount) / 100000) * 1000)}</td>
            {
                !disabledControl && <td className="invert" onClick={RemoveItemCartHandler}>
                    <div className="rem">
                        <div className="close1"/>
                    </div>
                </td>
            }
        </tr>
    )
}
export default RowInCart;
