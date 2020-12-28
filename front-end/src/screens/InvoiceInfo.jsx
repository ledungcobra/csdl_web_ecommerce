import React, {useEffect, useState} from 'react';
import store from "../store";
import RowInCart from "../components/CheckoutScreen/RowInCart";
import {useSelector} from "react-redux";
import BreadCrumb from "../components/Commons/BreadCrumb";
import {Link} from "react-router-dom";


import './CartScreen.css';
import {Col, Row} from "react-bootstrap";
import {Card} from "@material-ui/core";
import InfoInvoiceItem from "../components/InformationInvoice/InfoInvoiceList";
import axios from "axios";

const data = JSON.parse( localStorage.getItem("cartItems"));
console.log(typeof data);
export const CartContext = React.createContext(null);

const InvoiceInfo = () => {
    const {cartItems,totalPrice} = useSelector(state=>state.cart);
    const {userInfo:{id}} = useSelector(state=>state.user);
    const [Invoice, setInvoice] = useState([]);

    useEffect(() => {
        axios.get('/api/users/invoice/'+{id}).then(r => setInvoice(r.data)).catch(e => console.log(e));

    }, []);

    return (
        <div className='d-flex flex-column'>
            <BreadCrumb title={'Information Invoice'} />
            <InfoInvoiceItem/>

            <Row>
                <Col/>
                <Col md={3}>
                </Col>

            </Row>
        </div>
    );
};

export default InvoiceInfo;
