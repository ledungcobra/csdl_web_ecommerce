import React from 'react';
import AdProduct from "./AdProduct";
import ProductRow from "./ProductRow";

const ProductRightBanner = () => {
    return (
        <div className="w3l_banner_nav_right">
            <div className="w3l_banner_nav_right_banner3">
                <h3>Best Deals For New Products<span className="blink_me"></span></h3>
            </div>
            <div className="w3l_banner_nav_right_banner3_btm">
                <AdProduct />
                <AdProduct />
                <AdProduct />
                <div className="clearfix"></div>
            </div>
            <div className="w3ls_w3l_banner_nav_right_grid">
                <h3>Popular Brands</h3>
                <ProductRow />
                <ProductRow />
                <ProductRow />
            </div>
        </div>
    );
};

export default ProductRightBanner;
