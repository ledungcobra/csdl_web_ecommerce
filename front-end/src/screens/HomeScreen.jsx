import React, {useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap';
import LeftBanner from "../components/Commons/LeftBanner";
import RightBanner from "../components/HomeScreen/RightBanner";
import BottomBanner from "../components/HomeScreen/BannerBottom";
import HotOffers from "../components/HomeScreen/HotOffer";
import TopProducts from "../components/HomeScreen/TopProducts";
import NewLetter from "../components/HomeScreen/NewLetter";
import {login} from "../actions/userActions";
import axios from "axios";

const HomeScreen = () => {

    const [productHotOffers, setProductsHotOffers] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'

            }
        }
        axios.post('/api/products', {
            page: 1,
            limit:3
        },config).then(r => setProductsHotOffers(r.data)).catch(e=> console.log(e));

    },[]);
    return (
        <div>
            <Row>
                <Col md={12}>
                    <div className="banner">
                        <LeftBanner/>
                        <RightBanner/>
                        <div className="clearfix"/>
                    </div>
                    <BottomBanner/>
                    <HotOffers offers={productHotOffers}/>
                    <TopProducts/>
                    <NewLetter/>
                </Col>
            </Row>
        </div>
    )
}

export default HomeScreen
