import React, {useRef} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import RowInCart from "./RowInCart";
import {useDispatch, useSelector} from "react-redux";
import Button from "react-bootstrap/Button";
import {proceedCheckout} from "../../actions/checkoutActions";
import { useHistory } from 'react-router-dom';


const StepConfirmToCheckout = props => {
    const {cartItems} = useSelector(state => state.cart);
    const {userInfo, shippingVoucher, invoiceVoucher, totalPrice, loading, error} = useSelector(state => state.shipping);
    const messageRef = useRef();
    const calcActualPrice = (totalPrice, shippingVoucher, invoiceVoucher) => {

        if (!totalPrice) return 0;

        const discountedPrice = Object.keys(invoiceVoucher).length > 0 ? Math.floor(totalPrice * (100 - +invoiceVoucher.value) / 100000) * 1000 : totalPrice;


        let shippingPrice = 0

        if (Object.keys(shippingVoucher).length !== 0) {
            shippingPrice = Math.floor(+shippingVoucher.value * +shippingVoucher.price / 100000) * 1000;
        }

        return discountedPrice - shippingPrice;
    }
    const history = useHistory();

    const dispatch = useDispatch();


    const actualPrice = calcActualPrice(totalPrice, shippingVoucher, invoiceVoucher);

    const handlerProceedCheckout = (e) => {
        e.preventDefault();
        dispatch(proceedCheckout(actualPrice));

        if (error) {
            messageRef.current.innerHTML = 'Can not checkout';
            messageRef.current.className = 'text-danger';

            setTimeout(() => {
                messageRef.current.innerHTML = '';
            }, 700);

        } else {
            if (!loading) {
                setTimeout(() => {
                    history.push('/')
                }, 1300);
            }
        }
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
                        <Row className='mb-1'><span>Receiver's name: </span><Col/><span>{userInfo.name}</span></Row>
                        <Row className='mb-1'><span>Receiver's address: </span><span
                            className='ml-1'> {userInfo.address}</span></Row>
                        <Row
                            className='mb-1'><span>Receiver's Phone N.o:
                            </span><Col/><span>{userInfo.phonenumber}</span></Row>
                        <Row
                            className='mb-1'><span>Applied Shipping Voucher:
                            </span><Col/><span>- {shippingVoucher.name}</span></Row>
                        <Row
                            className='mb-1'><span>Applied Invoice Voucher: </span><Col/><span>-{invoiceVoucher.name}</span></Row>
                        <hr/>
                        <Row
                            className='mb-1'><span>Total price: </span><Col/><span>{new Intl.NumberFormat('vi-vi', {
                            style: 'currency',
                            currency: 'VND'
                        }).format(actualPrice)}</span></Row>

                    </Card>
                    <span className={error ? 'text-danger' : 'text-success'}>{
                        error ? error : !loading === false && 'Proceed checkout successfully'
                    }</span>
                    <span ref={messageRef}/>
                    <Button className='py-2 w-100' variant="primary"
                            onClick={handlerProceedCheckout}
                    >Proceed Checkout</Button>{' '}
                </Col>
            </Row>
        </div>
    );
};


export default StepConfirmToCheckout;
