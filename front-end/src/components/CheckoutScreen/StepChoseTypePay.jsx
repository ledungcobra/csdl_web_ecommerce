import React, {useContext, useEffect, useRef, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import axios from 'axios';
import Link from "@material-ui/core/Link";
import Container from "react-bootstrap/Container";
import './CheckoutRightBanner.css'
import {CheckoutContext} from "./Stepper";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom'
import {
    setInvoiceVoucher,
    setShippingUserInfo,
    setShippingVoucher,
    setUserInfo,
    setUserTypePay
} from "../../actions/checkoutActions";

const StepChoseTypePage = props => {

    const [typePays, setTypePays] = useState([]);
    const ref = useRef(null)
    const [invoiceVoucher, setInvoiceVouchers] = useState([]);
    const [shippingVoucher, setShippingVouchers] = useState([]);
    const {userInfo} = useSelector(state => state.user);
    // const []
    const [pageObj, setPageObj] = useState({});

    const {handleBack, handleNext} = useContext(CheckoutContext);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {

        if (!userInfo.id) {
            history.push('/login?login&redirect=checkout')
        }

        axios.get('/api/checkout/typepay')
            .then(({data}) => setTypePays(data))
            .catch(e => {
                if (ref) {
                    ref.current.innerHTML = e;
                    ref.current.className = 'text-danger';
                }
            })
    }, []);

    useEffect(() => {

        axios.get(`/api/checkout/voucher?id=${userInfo.id}&type=1`)
            .then(({data}) => {
                setInvoiceVouchers(data);
            }).catch(e => console.log(e));

    }, []);

    useEffect(() => {

        axios.get(`/api/checkout/voucher?id=${userInfo.id}&type=2`)
            .then(({data}) => {
                setShippingVouchers(data);
            }).catch(e => console.log(e));

    }, [])

    dispatch(setShippingUserInfo(userInfo));

    const onFormChange = (e) => {
        const {value, name, id} = e.target;
        console.log(e.target);

        setPageObj((prev) => {
            const new_state = {
                ...prev,
                [name]: {name: value, id}
            }
            console.log(new_state)
            return new_state
        })


    }

    return (
        <div onChange={onFormChange}>
            <Card className='py-3 px-3 mx-5'>

                <Container>
                    <Row>
                        <Col md={1} className='d-flex justify-content-center
                           align-items-center
                        '>
                    <span className='py-3 ' style={{
                        color: 'rgb(222,232,111,0.5)'
                    }}>
                    <i className='fas fa-money-check-alt fa-4x'/>
                    </span></Col>
                        <Col>
                            <Row>
                                <Col className='d-flex justify-content-center align-items-center'>
                                    <ul>
                                        {
                                            [{id: -100, name: 'Select type to pay'}, ...typePays].map((type, index) => (
                                                <div key={type.name} className='d-flex'>
                                                    <input type='radio' name='typePay'
                                                           id={type.id}
                                                           value={type.name}/>
                                                    <div className='mr-3'/>
                                                    <label>{type.name}</label>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                </Col>
                                <Col className='d-flex justify-content-center align-items-center'>
                                    <div className='d-flex flex-column
                                        justify-content-center
                                        w-100
                                        align-content-center'>
                                        <select name='invoiceVoucher' className='form-control my-2 mb-3'
                                                placeholder='Select invoice voucher'>
                                            {
                                                [{
                                                    id: -100,
                                                    name: 'Select invoice voucher'
                                                }, ...invoiceVoucher].map((voucher, i) =>
                                                    (
                                                        <option key={voucher.id} selected={i === 0}>
                                                            {i !== 0 ? voucher.name + ' ' + voucher.value + '%' : voucher.name}
                                                        </option>
                                                    ))
                                            }
                                        </select>
                                        <select name='shippingVoucher' className='form-control my-2 mb-3'
                                                placeholder='Select shipping voucher'>
                                            {
                                                [{
                                                    id: -100,
                                                    name: 'Select shipping voucher'
                                                }, ...shippingVoucher].map((voucher, i) =>
                                                    (
                                                        <option key={voucher.id}>
                                                            {i !== 0 ? (voucher.name + ' ' + voucher.value + '%') : voucher.name}
                                                        </option>
                                                    ))
                                            }
                                        </select>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <span ref={ref}/>
            </Card>

            <Row className='d-flex justify-content-between px-2 '>
                <div className="checkout-right-basket align-self-start">
                    <button className='direction-button-back' style={{color: "white"}}
                            onClick={(e) => {
                                e.preventDefault();
                                console.log('click')
                                handleBack();
                            }}>Back Step<span
                        aria-hidden="true"/></button>
                </div>
                <button className="checkout-right-basket align-self-start" style={{border: "none"}}>
                    <Link class='direction-button' onClick={(e) => {
                        e.preventDefault();

                        if (pageObj.typePage) {
                            if (pageObj.shippingVoucher) {
                                dispatch(
                                    setShippingVoucher({
                                        id: pageObj.shippingVoucher.id,
                                        name: pageObj.shippingVoucher.name
                                    })
                                );
                            }

                            if (pageObj.invoiceVoucher) {
                                dispatch(setInvoiceVoucher(
                                    {
                                        id: pageObj.invoiceVoucher.id,
                                        name: pageObj.invoiceVoucher.name
                                    })
                                );
                            }

                            if(pageObj.typePay){
                                dispatch(setUserTypePay({
                                    id: pageObj.typePay.id,
                                    name: pageObj.typePay.name
                                }));
                            }
                            handleNext();
                        }

                    }} to="/">Make a Payment <span
                        aria-hidden="true"/></Link>
                </button>
            </Row>
        </div>
    );
};

StepChoseTypePage.propTypes = {};

export default StepChoseTypePage;
