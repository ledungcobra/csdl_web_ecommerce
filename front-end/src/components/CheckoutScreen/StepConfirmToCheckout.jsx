import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import RowInCart from "./RowInCart";
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";

const StepConfirmToCheckout = props => {

    const {cartItems, totalPrice} = useSelector(state => state.cart);
    // const {selectedAddress} = useSelector(state=>state.shippingInfo);
    const shippingInfo = {
        name: 'Nguyen van X',
        address: 'ABC, XYZ, GYZ, akljlkds, l;dks;lakd;l',
        phoneNumber: '0971663834',
        actualPrice: 10000999,
        shippingVoucher: 1000,
        discountVoucher: 1000

    }

    const handlerProceedCheckout = (e)=>{
        e.preventDefault();

    }

    return (
        <div>
            <Row className='mx-3'>
                <Col md='8'>
                    <Card className='my-4 p-1 ml-3'>
                        <div className='d-flex flex-column'>
                            <table className="timetable_sub">
                                <thead>
                                <tr>
                                    <th>N.o</th>
                                    <th>Product</th>
                                    <th>Quality</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>

                                {cartItems.map((item, index) => {
                                    return (
                                        <RowInCart
                                            key={item.product}
                                            index={index}
                                            data={item}
                                            disabledControl

                                        />
                                    );
                                })}
                                </tbody>
                            </table>
                            <hr className='my-2 w-75 align-self-end'/>
                            <Row className=''>
                                <Col/>
                                <span className='text-primary ' style={{
                                    fontSize: '20px',
                                    fontStyle: 'bold'
                                }}>{new Intl.NumberFormat('vi-vi', {
                                    style: 'currency',
                                    currency: 'VND'
                                }).format(totalPrice)}</span>
                                <Col md='1'/>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card className='px-5 py-3'>
                        <Row className='mb-1'><span>Receiver's name: </span><Col/><span>{shippingInfo.name}</span></Row>
                        <Row className='mb-1'><span>Receiver's address: </span><span className='ml-1'> {shippingInfo.address}</span></Row>
                        <Row
                            className='mb-1'><span>Receiver's Phone N.o: </span><Col/><span>{shippingInfo.phoneNumber}</span></Row>
                        <Row
                            className='mb-1'><span>Applied Shipping Voucher: </span><Col/><span>- {shippingInfo.shippingVoucher}</span></Row>
                        <Row
                            className='mb-1'><span>Applied Discount Voucher: </span><Col/><span>-{shippingInfo.discountVoucher}</span></Row>
                        <hr/>
                        <Row
                            className='mb-1'><span>Total price: </span><Col/><span>{shippingInfo.actualPrice}</span></Row>

                    </Card>
                    <Button className='py-2 w-100' variant="primary"
                            onClick={handlerProceedCheckout}
                    >Proceed Checkout</Button>{' '}
                </Col>
            </Row>

        </div>


    );
};


export default StepConfirmToCheckout;
