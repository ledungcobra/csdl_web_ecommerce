import React, {useEffect, useState} from 'react';
import BreadCrumb from "../components/Commons/BreadCrumb";
import LeftBanner from "../components/Commons/LeftBanner";
import {Col, Row} from "react-bootstrap";
import axios from 'axios';
import SingleProductItem from "../components/ProductsScreen/SingleProductItem";
import TypeProduct from "../components/ProductsScreen/TypeProduct";
import {useHistory} from 'react-router-dom';
import {Pagination} from "@material-ui/lab";
import PaginationControlled from "../components/Commons/Paging";

const TypeScreen = () => {

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
                    <TypeProduct
                        url={window.location.pathname}
                        page = {window.location.search}
                    />
                    </Col>

                </Row>
                <Row >
                    <Col className='d-flex justify-content-center'>
                        <PaginationControlled
                            url ={window.location.pathname}
                            pageParam={window.location.search}
                        />
                    </Col>
                </Row>

            </div>
        </div>
    );
};


export default TypeScreen;