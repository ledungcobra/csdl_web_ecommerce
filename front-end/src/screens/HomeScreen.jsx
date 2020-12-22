import React from 'react'
import {Row, Col} from 'react-bootstrap';
import LeftBanner from "../components/HomeScreen/LeftBanner";
import RightBanner from "../components/HomeScreen/RightBanner";
import BottomBanner from "../components/HomeScreen/BannerBottom";
import HotOffers from "../components/HomeScreen/HotOffer";
import TopProducts from "../components/HomeScreen/TopProducts";
import NewLetter from "../components/HomeScreen/NewLetter";

const HomeScreen = () => {
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
                    <HotOffers/>
                    <TopProducts/>
                    <NewLetter/>
                </Col>
            </Row>
        </div>
    )
}

export default HomeScreen
