import React, {useEffect, useState} from 'react';
import BreadCrumb from "../components/Commons/BreadCrumb";
import LeftBanner from "../components/Commons/LeftBanner";
import {Col, Row} from "react-bootstrap";
import HotOffers from "../components/HomeScreen/HotOffer";
import axios from 'axios';

const SingleProductScreen = ({match}) => {

    const [product,setProduct] = useState({});

    useEffect(()=>{
        const {data} = axios.get('/api/products/')
    },[]);

    return (
        <div>
            <BreadCrumb title={'Product'}/>
            <div className="banner">
                <Row>
                    <Col md={3}>
                        <div className="banner">

                            <LeftBanner/>
                            <div className="clearfix"/>
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="w3l_banner_nav_right">
                            <div className="agileinfo_single">
                                <h5>charminar pulao basmati rice 5 kg</h5>
                                <div className="col-md-4 agileinfo_single_left">
                                    <img id="example" src="/images/76.png" alt=" " className="img-responsive"/>
                                </div>
                                <div className="col-md-8 agileinfo_single_right">
                                    <div className="rating1">
						<span className="starRating">
							<input id="rating5" type="radio" name="rating" value="5"/>
							<label htmlFor="rating5">5</label>
							<input id="rating4" type="radio" name="rating" value="4"/>
							<label htmlFor="rating4">4</label>
							<input id="rating3" type="radio" name="rating" value="3" checked/>
							<label htmlFor="rating3">3</label>
							<input id="rating2" type="radio" name="rating" value="2"/>
							<label htmlFor="rating2">2</label>
							<input id="rating1" type="radio" name="rating" value="1"/>
							<label htmlFor="rating1">1</label>
						</span>
                                    </div>
                                    <div className="w3agile_description">
                                        <h4>Description :</h4>
                                    </div>
                                    <div className="snipcart-item block">
                                        <div className="snipcart-thumb agileinfo_single_right_snipcart">
                                            <h4>$21.00 <span>$25.00</span></h4>
                                        </div>
                                        <div className="snipcart-details agileinfo_single_right_details">
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <input type="hidden" name="cmd" value="_cart"/>
                                                    <input type="hidden" name="add" value="1"/>
                                                    <input type="hidden" name="business" value=" "/>
                                                    <input type="hidden" name="item_name" value="pulao basmati rice"/>
                                                    <input type="hidden" name="amount" value="21.00"/>
                                                    <input type="hidden" name="discount_amount" value="1.00"/>
                                                    <input type="hidden" name="currency_code" value="USD"/>
                                                    <input type="hidden" name="return" value=" "/>
                                                    <input type="hidden" name="cancel_return" value=" "/>
                                                    <input type="submit" name="submit" value="Add to cart"
                                                           className="button"/>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};


export default SingleProductScreen;
