import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './ProductItem.css'
import {useDispatch} from "react-redux";
import {addToCart} from "../../actions/cartActtions";
import ProductItem from "./ProductItem";

const FormAddCart = ({productId}) => {
    const dispatch = useDispatch();


    const addToCartHandler = (e) => {
        e.preventDefault();
        dispatch(addToCart(productId));

    }
    return (
        <form action="#" method="post" onSubmit={(e)=>{e.preventDefault();}}>
            <fieldset>
                <input type="hidden" name="cmd" value="_cart"/>
                <input type="hidden" name="add" value="1"/>
                <input type="hidden" name="business" value=" "/>
                <input type="hidden" name="item_name"
                       value="premium bake rusk"/>
                <input type="hidden" name="amount" value="5.00"/>
                <input type="hidden" name="discount_amount" value="1.00"/>
                <input type="hidden" name="currency_code" value="USD"/>
                <input type="hidden" name="return" value=" "/>
                <input type="hidden" name="cancel_return" value=" "/>

            </fieldset>
            <input type="submit" name="submit" value="Add to cart"
                                 className="button" onClick={addToCartHandler}/>
        </form>
    );
}
export default FormAddCart;