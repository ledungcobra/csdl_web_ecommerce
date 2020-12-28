import React, {createRef, useContext, useEffect, useRef, useState} from 'react';
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
    setShippingVoucher, setTotalPrice,
    setUserTypePay
} from "../../actions/checkoutActions";

const StepChoseTypePage = props => {

    const [typePays, setTypePays] = useState([]);
    const ref = useRef(null)
    const [invoiceVoucher, setInvoiceVouchers] = useState([]);
    const [shippingVoucher, setShippingVouchers] = useState([]);
    const {userInfo} = useSelector(state => state.user);
    const [pageObj, setPageObj] = useState({});
    const {handleBack, handleNext} = useContext(CheckoutContext);
    const history = useHistory();

    const scrollRef = createRef();
    const dispatch = useDispatch();
    const messageRef = useRef();


    const price = useSelector(state => state.shipping).userInfo.price;


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
        scrollRef.current.scrollIntoView({behavior: "smooth"});
    }, []);

    useEffect(() => {

        axios.get(`/api/checkout/voucher?id=${userInfo.id}&type=1`)
            .then(({data}) => {
                console.log(data)
                setInvoiceVouchers(data);
            }).catch(e => console.log(e));

    }, []);

    useEffect(() => {

        axios.get(`/api/checkout/voucher?id=${userInfo.id}&type=2`)
            .then(({data}) => {
                setShippingVouchers(data.map(item => ({...item, price})));
            }).catch(e => console.log(e));

    }, [])

    const onFormChange = (e) => {
        let {value, name, id} = e.target;
        let val = null;
        let shippingPrice = null;

        if (e.target.innerHTML) {
            id = (Array.from(e.target.querySelectorAll('option')).find(element => element.value === value)).id;

            if (name === 'shippingVoucher') {
                const found = shippingVoucher.find(voucher => +voucher.id === +id);

                if(found){
                    val = found.value;
                    shippingPrice = found.price;
                }
            }

            if (name === 'invoiceVoucher') {
                val = invoiceVoucher.find(voucher => +voucher.id === +id).value;

            }
        }

        setPageObj((prev) => {
            let new_state = {
                ...prev,
                [name]: {name: value, id, value: val}
            }

            if (name === 'shippingVoucher') {
                new_state = {
                    ...new_state,
                    shippingVoucher: {
                        ...new_state.shippingVoucher,
                        price: shippingPrice
                    }
                }

            }
            return new_state
        })
    }

    const handleNextButton = (e) => {
        e.preventDefault();

        console.log('Set price');
        dispatch(setTotalPrice());


        if (pageObj.shippingVoucher) {
            dispatch(
                setShippingVoucher(pageObj.shippingVoucher));
        }

        if (pageObj.invoiceVoucher) {
            dispatch(setInvoiceVoucher(pageObj.invoiceVoucher));
        }

        if (pageObj.typePay) {
            dispatch(setUserTypePay(pageObj.typePay));
            handleNext();
        }else{
            messageRef.current.innerHTML = 'You must choose payment method before going next'
            messageRef.current.className = 'text-danger';
            setTimeout(()=>{
                if(messageRef.current){
                    messageRef.current.innerHTML = ''
                }
            },1000);
        }



    }

    return (
        <div ref={scrollRef}>
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
                                    <ul onChange={onFormChange}>
                                        {
                                            [{id: -100, name: 'Select type to pay'}, ...typePays].map((type, index) => (
                                                <div key={type.name} className='d-flex'

                                                >
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
                                                placeholder='Select invoice voucher'
                                                onChange={onFormChange}
                                        >
                                            {
                                                [{
                                                    value: 0,
                                                    id: -100,
                                                    name: 'Select invoice voucher'
                                                }, ...invoiceVoucher].map((voucher, i) =>
                                                    (
                                                        <option id={voucher.id} key={voucher.id}
                                                                selected={i === 0} onClick={onFormChange}>
                                                            {i !== 0 ? voucher.name + ' ' + voucher.value + '%' : voucher.name}
                                                        </option>
                                                    ))
                                            }
                                        </select>
                                        <select name='shippingVoucher' className='form-control my-2 mb-3'
                                                onChange={onFormChange}
                                                placeholder='Select shipping voucher'>

                                            {
                                                [{
                                                    value: 0,
                                                    id: -100,
                                                    name: 'Select shipping voucher'
                                                }, ...shippingVoucher].map((voucher, i) =>
                                                    (
                                                        <option
                                                            id={voucher.id}
                                                            key={voucher.id}>
                                                            {i !== 0 ? (voucher.name + ' ' + voucher.value + '%') : voucher.name}
                                                        </option>
                                                    ))
                                            }
                                        </select>
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
                <span ref={messageRef}/>
                <button className="checkout-right-basket align-self-start" style={{border: "none"}}>
                    <Link class='direction-button' onClick={handleNextButton} to="/">Make a Payment <span
                        aria-hidden="true"/></Link>
                </button>
            </Row>
        </div>
    )
        ;
};

StepChoseTypePage.propTypes = {};

export default StepChoseTypePage;
