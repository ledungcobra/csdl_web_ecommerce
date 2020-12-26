import React, {useState, useEffect, useContext} from "react";
import {addToCart, reduceToCart, removeFromCart} from "../../actions/cartActtions";
import {useDispatch} from "react-redux";
import {CartContext} from "../../screens/CartScreen";

const RowInCart = ({data, index}) => {
    const [dataState, setDataState] = useState(data);
    const {decreaseItem} = useContext(CartContext);

    const RemoveItemCartHandler = (e) => {
        e.preventDefault();
        decreaseItem()
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
            <td className="invert">{data.product}</td>
            <td className="invert-image"><a href=""><img src={dataState.image} alt=" "
                                                         className="img-responsive"/></a>
            </td>
            <td className="invert">
                <div className="quantity">
                    <div className="quantity-select">
                        <div className="entry value-minus" onClick={ReduceQtyItem}>&nbsp;</div>
                        <div className="entry value"><span>{dataState.qty}</span></div>
                        <div className="entry value-plus active" onClick={addToCartHandler}>&nbsp;</div>
                    </div>
                </div>
            </td>
            <td className="invert" style={{"width": "600px"}}>{dataState.name}</td>
            <td className="invert">{dataState.price * dataState.qty}</td>
            <td className="invert" onClick={RemoveItemCartHandler}>
                <div className="rem">
                    <div className="close1"/>
                </div>
            </td>
        </tr>
    )
}
export default RowInCart;
