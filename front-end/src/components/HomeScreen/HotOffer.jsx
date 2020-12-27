import React, {useState} from 'react';
import ProductItem from "../Commons/ProductItem";



const HotOffers = ({offers}) => {


    return (
        <div className="top-brands">
            <div className="container">
                <h3>Hot Offers</h3>
                <div className="agile_top_brands_grids">
                    {
                        offers.map((prod, index) => {
                            const product = {
                                productId: prod.Id_Good,
                                imageUrl: prod.Thumbnail_URL,
                                currentPrice: parseInt(prod.GD_Price*(100-prod.GD_Discount_Rate)/100000)*1000,
                                productName: prod.GD_Name,
                                stockPrice: prod.GD_Price,
                                discount: prod.GD_Discount_Rate
                            };

                            return(
                                <div>
                                    <ProductItem key={index}
                                                 product={product} />
                                    {(index + 1) % 4 === 0 && (<div className="clearfix"/>)}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default HotOffers;
