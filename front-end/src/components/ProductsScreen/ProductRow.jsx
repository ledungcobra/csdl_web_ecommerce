import React from 'react';
import ProductItem from "./ProductItem";

const ProductRow = ({products} = {}) => {
    return (
        <div className="w3ls_w3l_banner_nav_right_grid1">
            <h6>Type</h6>
                {products.map((prod,index)=>(
                    <ProductItem productName={prod.gd_name}
                                currentPrice={prod.price}
                                imageUrl={prod.thumbnail}
                ))}
            <div className="clearfix"/>
        </div>
    );
};


export default ProductRow;
