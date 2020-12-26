import React, {useEffect, useState} from 'react';
import {light} from "@material-ui/core/styles/createPalette";
import axios from 'axios';
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
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
    const [provinceData,setProvinceData] = useState([]);
    const [districtData,setDistrictData] = useState([]);
    const [wardData,setWardData] = useState([]);
    const {cartItems} = useSelector(state=>state.cart);
    const {userInfo} = useSelector(state=>state.user);
    const history = useHistory()
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
    //push cart to sql
    const onFormSubmit = (e) =>{

        if (userInfo.id){
            console.log(userInfo.id)
            const config = {
                headers: {
                    'Content-Type': 'application/json'

                }
            }
            axios.post('/api/cart/',{
                cart: cartItems,
                user: userInfo.id
            },config).then(()=>{}).catch(e=>console.log(e));
        }
        else {
            console.log("fail")
            history.push(`/login`);
        }


    }

    const onAddAddress = (e)=>{
        if (userInfo.id){
            console.log(userInfo.id)
            const config = {
                headers: {
                    'Content-Type': 'application/json'

                }
            }
            axios.post('/api/checkout/addAddress',{shippingData:shippingData, userid: userInfo.id},config).then(()=>{}).catch(e=>console.log(e));
        }
        else {
            console.log("fail")
            history.push(`/login`);
        }
    }

    useEffect( ()=>{
        axios.get('/api/checkout/province').then(({data})=>{

            data.unshift({});
            setProvinceData(data)
        });

    },[])

    useEffect( ()=>{

        if(shippingData.provinceOrCity){
           axios.get('/api/checkout/district/' + shippingData.provinceOrCity).then(({data})=>{

               data.unshift({});
               setDistrictData(data);
           });
        }

        if(shippingData.district){
           axios.get('/api/checkout/ward/'+ shippingData.district ).then(({data})=>{

               data.unshift({});
               setWardData(data);
           });
        }

    },[shippingData])


    return (
        <div>
            <div>
                <div className="privacy about">
                    <h3>Chec<span>kout</span></h3>

                    <div className="checkout-left">
                        <div className="col-md-4 checkout-left-basket">
                            <h4>Continue to basket</h4>
                            <ul>
                                <li>Product1 <i>-</i> <span>$15.00 </span></li>
                                <li>Product2 <i>-</i> <span>$25.00 </span></li>
                                <li>Product3 <i>-</i> <span>$29.00 </span></li>
                                <li>Total Service Charges <i>-</i> <span>$15.00</span></li>
                                <li>Total <i>-</i> <span>$84.00</span></li>
                            </ul>
                        </div>
                        <div className="col-md-8 address_form_agile">
                            <h4>Add a new Details</h4>
                            <form action="#" method="post" className="creditly-card-form agileinfo_form"
                                  onChange={onFormChange} >
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
                            <button className="submit check_out" type='button'  onClick={onAddAddress}>Add New Address</button>
                            <div className="checkout-right-basket">
                                <a href="/">Make a Payment <span
                                    className="glyphicon glyphicon-chevron-right" aria-hidden="true"/></a>
                            </div>
                        </div>
                        <div className="clearfix"/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CheckoutRightBanner;
