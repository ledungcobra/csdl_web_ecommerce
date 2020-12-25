import React, {useState} from 'react';
import ProductItem from "../Commons/ProductItem";

const HotOffers = ({offers}) => {


    return (
        <div className="top-brands">
            <div className="container">
                <h3>Hot Offers</h3>
                <div className="agile_top_brands_grids">
                    {
                        offers.map((prod, index) => (
                            <div>
                                <ProductItem key={index}
                                             productId = {prod.Id_Good}
                                             imageUrl={prod.Thumbnail_URL}
                                             currentPrice={prod.GD_Price}
                                             productName={prod.GD_Name}
                                             stockPrice={prod.GD_Price * parseFloat(prod.GD_Discount_Rate) / 100}
                                />
                                {(index + 1) % 4 === 0 && (<div className="clearfix"/>)}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default HotOffers;
