import React, {useEffect, useState} from 'react';
import BreadCrumb from "../components/Commons/BreadCrumb";
import LeftBanner from "../components/Commons/LeftBanner";
import {Col, Row} from "react-bootstrap";
import HotOffers from "../components/HomeScreen/HotOffer";
import axios from 'axios';
import ProductItem from "../components/Commons/ProductItem";
import SingleProductItem from "../components/ProductsScreen/SingleProductItem";

const SingleProductScreen = ({match}) => {

    const [product,setProduct] = useState([]);
    console.log(match)
    useEffect(()=>{
        const {data} = axios.get('/api/products/'+match.params.id).then(r => {setProduct(r.data)
            console.log(r.data)}).catch(e => console.log(e))
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
                        {
                            product.map((dataProd)=>{
                                return (
                                    <SingleProductItem
                                        key = {dataProd.Id_GD}
                                        product={dataProd}/>
                                )
                            })
                        }

                    </Col>
                </Row>
            </div>
        </div>
    );
};


export default SingleProductScreen;
