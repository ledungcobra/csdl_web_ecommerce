import React, {createRef, useContext, useEffect, useRef, useState} from 'react';
import {light} from "@material-ui/core/styles/createPalette";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from 'react-router-dom';
import {Card} from "@material-ui/core";
import {Col, Row} from "react-bootstrap";
import './CheckoutRightBanner.css'
import {CheckoutContext} from "./Stepper";
import {setTotalPrice, setShippingUserInfo} from "../../actions/checkoutActions";

const CheckoutRightBanner = () => {

    const [shippingData, setShippingData] = useState({
        name: '',
        phoneNumber: '',
        provinceOrCity: '',
        district: '',
        ward: '',
        address: ''
    });

    const [provinceData, setProvinceData] = useState([]);
    const [districtData, setDistrictData] = useState([]);
    const [wardData, setWardData] = useState([]);
    const {cartItems} = useSelector(state => state.cart);
    const {userInfo} = useSelector(state => state.user);
    const [address, setAddress] = useState([]);
    const [currentUserInfo, setCurrentDeliveryInfo] = useState(null);
    const dispatch = useDispatch();

    const {handleNext,handleBack} = useContext(CheckoutContext);

    const messageRef = createRef();
    const history = useHistory();

    useEffect(() => {
        axios.get(`/api/checkout/address/${userInfo.id}`)
            .then(({data}) => {
                setAddress(data);

                if (data.length > 0) {
                    setCurrentDeliveryInfo(data[0]);
                }
            })
            .catch(e => console.log(e));


    }, [])
    const onFormChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setShippingData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const onSelectAddressChange = (e) => {
        const {value} = e.target;

        const found = address.find(ad => ad.id === parseInt(value));
        console.log(found)
        setCurrentDeliveryInfo(found);
    }

    //push cart to sql
    const onFormSubmit = (e) => {

        if (userInfo.id) {
            console.log(userInfo.id)
            const config = {
                headers: {
                    'Content-Type': 'application/json'

                }
            }
            axios.post('/api/cart/', {
                cart: cartItems,
                user: userInfo.id
            }, config).then(() => {
            }).catch(e => console.log(e));
        } else {
            console.log("fail")
            history.push(`/login?login`);
        }


    }

    const onAddAddress = (e) => {
        e.preventDefault();

        if (userInfo.id) {
            console.log(userInfo.id)
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios.post('/api/checkout/addAddress', {
                shippingData: shippingData,
                userid: userInfo.id
            }, config).then(() => {

                messageRef.current.innerHTML = 'Add address success';
                setTimeout(() => {
                    messageRef.current.innerHTML = '';

                    axios.get(`/api/checkout/address/${userInfo.id}`)
                        .then(({data}) => {
                            setAddress(data);
                            if(currentUserInfo == null){
                                setCurrentDeliveryInfo(data[0]);
                            }
                        })
                        .catch(e => console.log(e));
                }, 1000)
            }).catch(e => {
                messageRef.current.innerHTML = 'Add address fail';
                setTimeout(() => {
                    messageRef.current.innerHTML = '';
                }, 1000)

            });
        } else {
            console.log("fail")
            history.push(`/login?login`);
        }
    }

    useEffect(() => {
        axios.get('/api/checkout/province').then(({data}) => {

            data.unshift({});
            setProvinceData(data)
        });

    }, [])

    useEffect(() => {

        if (shippingData.provinceOrCity) {
            axios.get('/api/checkout/district/' + shippingData.provinceOrCity).then(({data}) => {

                data.unshift({});
                setDistrictData(data);
            });
        }

        if (shippingData.district) {
            axios.get('/api/checkout/ward/' + shippingData.district).then(({data}) => {

                data.unshift({});
                setWardData(data);
            });
        }

    }, [shippingData])

    return (
        <div>
            <div>
                <div className="privacy about">
                    <h3>Chec<span>kout</span></h3>

                    <div className="checkout-left">
                        <Row>
                            <Col md={3}>
                                <Card className='d-flex flex-column justify-content-center align-content-center p-3'>
                                    <div className="checkout-left-basket ">
                                        <h4>Continue to basket</h4>
                                        {
                                            currentUserInfo &&
                                            <ul className='px-3'>
                                                <li>Receiver's name<i>: </i> <span>{currentUserInfo.name}</span></li>
                                                <li>Ward<i>: </i><span>{currentUserInfo.ward}</span></li>
                                                <li>District<i>: </i> <span>{currentUserInfo.district}</span></li>
                                                <li>Province<i>: </i><span>{currentUserInfo.province}</span></li>
                                                <li>Address<i>: </i> <span></span> {currentUserInfo.address}</li>
                                            </ul>
                                        }


                                    </div>
                                    <select className='form-control w-90 mr-5'
                                            name='user-address'
                                            required
                                            onChange={onSelectAddressChange}>
                                        {
                                            address.map(ad => (<option key={ ad.id }value={ad.id}>{ad.address}</option>))
                                        }

                                    </select>
                                </Card>
                            </Col>
                            <Col md={9}>
                                <Card className='py-3 px-3'>
                                    <h4>Add a New Address</h4>
                                    <form action="#" method="post"
                                          onSubmit={onAddAddress}
                                          className="creditly-card-form agileinfo_form"
                                          onChange={onFormChange}>
                                        <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                                            <div className="information-wrapper">
                                                <div className="first-row form-group">
                                                    <div className="controls">
                                                        <label className="control-label">Full name: </label>
                                                        <input className="billing-address-name form-control" type="text"
                                                               name="name" placeholder="Full name" required/>
                                                    </div>
                                                    <div className="w3_agileits_card_number_grids">
                                                        <div className="w3_agileits_card_number_grid_left">
                                                            <div className="controls">
                                                                <label className="control-label">Mobile number:</label>
                                                                <input className="form-control" type="text"
                                                                       name='phoneNumber'
                                                                       required
                                                                       placeholder="Mobile number"/>
                                                            </div>
                                                        </div>
                                                        <div className="w3_agileits_card_number_grid_right">
                                                            <div className="controls">
                                                                <label className="control-label">Province/City: </label>
                                                                <select className='d-block w-100 form-control py-0'
                                                                        name='provinceOrCity'
                                                                        required
                                                                >
                                                                    {
                                                                        provinceData.map(province =>
                                                                            (<option value={province.id}>
                                                                                {province.name}
                                                                            </option>))
                                                                    }
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="clear"/>
                                                    </div>
                                                    <div className="controls">
                                                        <label className="control-label">District: </label>
                                                        <select className='d-block w-100 form-control py-0'
                                                                name='district'
                                                                required
                                                        >
                                                            {
                                                                districtData.map(datum => <option value={datum.id}>
                                                                    {datum.name}
                                                                </option>)
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className="controls">
                                                        <label className="control-label">Ward: </label>
                                                        <select className='d-block w-100 form-control py-0'
                                                                name='ward'
                                                                required
                                                        >
                                                            {
                                                                wardData.map(datum => <option value={datum.id}>
                                                                    {datum.name}
                                                                </option>)
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className="controls">
                                                        <label className="control-label">Address:</label>
                                                        <input className="form-control" type="text"
                                                               name='address'
                                                               required
                                                               placeholder="Address"/>
                                                    </div>
                                                </div>

                                            </div>
                                        </section>
                                        <span ref={messageRef} className='text-success'/>

                                        <Row>

                                            <Col className='d-flex flex-column'>
                                                <button className="submit check_out" type='submit'
                                                >Add New
                                                    Address
                                                </button>

                                            </Col>
                                        </Row>
                                        <Row className='d-flex justify-content-between px-2'>
                                                <div className="checkout-right-basket align-self-start">
                                                    <Link className='direction-button-back' onClick={(e) => {
                                                        e.preventDefault();
                                                        handleBack();
                                                    }} to="/">Back Step<span
                                                        aria-hidden="true"/></Link>
                                                </div>
                                                <Col/>
                                                <div className="checkout-right-basket align-self-start">
                                                    <Link class='direction-button' onClick={(e) => {
                                                        e.preventDefault();
                                                        //Store current Address into reducer
                                                        if(currentUserInfo!=null){
                                                            dispatch(setShippingUserInfo(currentUserInfo));
                                                            handleNext();
                                                        }else{
                                                            messageRef.current.innerHTML = 'You must choose address to ship to'
                                                            messageRef.current.className = 'text-danger';
                                                            setTimeout(()=>{
                                                                messageRef.current.innerHTML = '';

                                                            },1000)
                                                        }
                                                    }} to="/">Make a Payment <span
                                                        aria-hidden="true"/></Link>
                                                </div>
                                        </Row>
                                    </form>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CheckoutRightBanner;
