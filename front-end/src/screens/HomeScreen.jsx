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
import {useSelector} from "react-redux";

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
            limit: 10
        }, config).then(r => setProductsHotOffers(r.data)).catch(e => console.log(e));

    }, []);
    const {error} = useSelector(state => state.cart)
    useEffect(() => {
        if (error) {
            window.alert(error);
        }
    }, [error])

    return (
        <div>
            <Row>
                <Col>
                    <div className="banner">

                        <LeftBanner/>
                        <div className="clearfix"/>
                    </div>
                </Col>
                <Col>
                    <div className="banner">
                        <HotOffers offers={productHotOffers}/>
                        <div className="clearfix"/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default HomeScreen
