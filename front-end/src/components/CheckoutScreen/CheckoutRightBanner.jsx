import React, {useEffect, useState} from 'react';
import {light} from "@material-ui/core/styles/createPalette";
import axios from 'axios';
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {Card} from "@material-ui/core";
import {Col, Row} from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/DropdownMenu";

const CheckoutRightBanner = () => {

    let data = [{name: "HCM", id: 1}, {name: "YY", id: 2}, {name: "ZZ", id: 3}];
    const [shippingData, setShippingData] = useState({
        name: 'asa',
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
    const [currentAddress, setCurrentAddress] = useState(null);

    const history = useHistory()

    useEffect(() => {
        axios.get(`/api/checkout/address/${userInfo.id}`)
            .then(({data}) => {
                console.log(data)
                setAddress(data)
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
        const found = address.filter(ad => ad.id === value);

        setCurrentAddress(found[0]);


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
            }).catch(e => console.log(e));
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
                                <Card className='d-flex justify-content-center align-content-center py-3'>
                                    <div className="checkout-left-basket ">
                                        <h4>Continue to basket</h4>
                                        {
                                            currentAddress &&
                                            <ul>
                                                <li>Ward: <i>-</i> <span>{currentAddress.ward}</span></li>
                                                <li>District <i>-</i> <span>{currentAddress.district}</span></li>
                                                <li>Province <i>-</i> <span>{currentAddress.province}</span></li>
                                                <li>Address <i>-</i> <span></span> {currentAddress.address}</li>
                                            </ul>
                                        }

                                        <select className='d-block w-100 form-control py-0'
                                                onChange={onSelectAddressChange}>
                                            {
                                                address.map(ad => (<option value={ad.id}>{ad.address}</option>))
                                            }

                                        </select>
                                    </div>
                                </Card>
                            </Col>
                            <Col md={9}>
                                <Card className='py-3 px-3'>
                                    <h4>Add a new Details</h4>
                                    <form action="#" method="post" className="creditly-card-form agileinfo_form"
                                          onChange={onFormChange}>
                                        <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                                            <div className="information-wrapper">
                                                <div className="first-row form-group">
                                                    <div className="controls">
                                                        <label className="control-label">Full name: </label>
                                                        <input className="billing-address-name form-control" type="text"
                                                               name="name" placeholder="Full name"/>
                                                    </div>
                                                    <div className="w3_agileits_card_number_grids">
                                                        <div className="w3_agileits_card_number_grid_left">
                                                            <div className="controls">
                                                                <label className="control-label">Mobile number:</label>
                                                                <input className="form-control" type="text"
                                                                       name='phoneNumber'
                                                                       placeholder="Mobile number"/>
                                                            </div>
                                                        </div>
                                                        <div className="w3_agileits_card_number_grid_right">
                                                            <div className="controls">
                                                                <label className="control-label">Province/City: </label>
                                                                <select className='d-block w-100 form-control py-0'
                                                                        name='provinceOrCity'

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
                                                               placeholder="Address"/>
                                                    </div>
                                                </div>

                                            </div>
                                        </section>
                                    </form>
                                    <button className="submit check_out" type='button' onClick={onAddAddress}>Add New
                                        Address
                                    </button>
                                    <div className="checkout-right-basket">
                                        <a href="/">Make a Payment <span
                                            className="glyphicon glyphicon-chevron-right" aria-hidden="true"/></a>
                                    </div>

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
