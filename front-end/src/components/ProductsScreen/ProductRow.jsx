import React from 'react';
import ProductItem from "../Commons/ProductItem";

const ProductRow = ({type, products} = {}) => {
    return (
        <div className="w3ls_w3l_banner_nav_right_grid1">
            {type && <h6>{type}</h6>}
            {
                products.map((prod, index) => {
                        const product = {
                            productId: prod.Id_Good,
                            imageUrl: prod.Thumbnail_URL,
                            currentPrice: prod.GD_Price,
                            productName: prod.GD_Name,
                            stockPrice: prod.GD_Price * parseFloat(prod.GD_Discount_Rate) / 100
                        };
                        return (
                            <ProductItem key={index}
                                         product={product}/>)
                    }
                )
            }
            < div className="clearfix"/>
        </div>
    );
};


export default ProductRow;
