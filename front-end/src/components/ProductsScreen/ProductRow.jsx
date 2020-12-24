import React from 'react';
import ProductItem from "../Commons/ProductItem";

const ProductRow = ({type,products} = {}) => {
    return (
        <div className="w3ls_w3l_banner_nav_right_grid1">
            <h6>{type}</h6>
            {
                products.map((prod, index) => (
                <ProductItem key={index}
                             productName={prod.GD_Name}
                             currentPrice={prod.GD_Price}
                             imageUrl={prod.Thumbnail_URL} />)
                )
            }
            < div className="clearfix"/>
        </div>
    );
};


export default ProductRow;
