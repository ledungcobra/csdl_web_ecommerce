import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import BreadCrumb from "../components/Commons/BreadCrumb";
import './CartScreen.css';
import {Col, Row} from "react-bootstrap";
import {Card} from "@material-ui/core";
import axios from "axios";
import InvoiceItem from "../components/InformationInvoice/InvoiceItem";

const InvoiceInfo = () => {
    const {cartItems, totalPrice} = useSelector(state => state.cart);
    const {userInfo: {id}} = useSelector(state => state.user);
    const [invoice, setInvoice] = useState([]);

    useEffect(() => {
        axios.get('/api/users/invoice/?userid=' + id).then(r => {
            setInvoice(r.data.result)

        }).catch(e => console.log(e));

    }, []);

    return (
        <div className='d-flex flex-column'>
            <BreadCrumb title={'Information Invoice'}/>
            {
                invoice.map((data, index) => {
                    return (
                        <div>
                            <Card className='m-3 p-1'>
                                <i className='font-weight-light'>Invoide: {data.Id_Invoice}</i>
                                <table className="timetable_sub">
                                    <thead>
                                    <tr>
                                        <th>ID Invoice</th>
                                        <th>Voucher Shipping</th>
                                        <th>Voucher Product</th>
                                        <th>Status Invoice</th>
                                        <th>Total Price Invoice</th>
                                        <th>Date Invoice</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <td>{data.Id_Invoice}</td>
                                    <td>{data.Id_ShipVoucher}</td>
                                    <td>{data.Id_ProductVoucher}</td>
                                    <td> {data.Id_StatusInvoice}</td>
                                    <td> {data.Invoice_TotalPrice}</td>
                                    <td> {data.Invoice_InvoiceDate}</td>
                                    </tbody>
                                </table>
                                <i className='fontawesome-icon-list'>List product</i>
                                <InvoiceItem
                                    key={index}
                                    InvoiceItem={data}
                                />
                            </Card>
                        </div>

                    )
                })
                }

                <Row>
                <Col/>
                <Col md={3}>
                </Col>

                </Row>
                </div>
                );
            }

            export default InvoiceInfo;
