import React from 'react';
import BreadCrumb from "../components/Commons/BreadCrumb";
import LeftBanner from "../components/Commons/LeftBanner";
import ProductRightBanner from "../components/ProductsScreen/ProductsRightBanner";

const ProductsScreen = () => {
    return (
        <div>
            <BreadCrumb title={'Products'}/>
            <div className="banner">
                <LeftBanner/>
                <ProductRightBanner/>
                <div className="clearfix"/>
            </div>
        </div>
    );
};


export default ProductsScreen;
