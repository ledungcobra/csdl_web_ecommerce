import React, {useEffect, useState} from 'react';
import BreadCrumb from "../components/Commons/BreadCrumb";
import LeftBanner from "../components/Commons/LeftBanner";
import {Col, Row} from "react-bootstrap";
import axios from 'axios';
import SingleProductItem from "../components/ProductsScreen/SingleProductItem";
import TypeProduct from "../components/ProductsScreen/TypeProduct";
import {useHistory} from 'react-router-dom';

const TypeScreen = ({match}) => {


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
                    <TypeProduct url={match.url}/>
                    </Col>
                </Row>
            </div>
        </div>
    );
};


export default TypeScreen;