import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './ProductItem.css'
import  FormAddCart from './FormAddCart'


const ProductItem = ({productId = "1", productName = 'default name', currentPrice = 100, stockPrice = 200, imageUrl = ''} = {}) => {

    return (
        <div className="col-md-3 w3ls_w3l_banner_left product-item">
            <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                        <img src="images/offer.png" alt=" " className="img-responsive"/>
                    </div>
                    <div className="agile_top_brand_left_grid1">
                        <figure>
                            <div className="snipcart-item block">
                                <div className="snipcart-thumb">
                                    <a href="single.html"><img src={imageUrl} alt=" "
                                                               className="img-responsive"/></a>
                                    <p className='product-text'>{productName}</p>
                                    <h4>{currentPrice}<span>{stockPrice}</span></h4>
                                </div>
                                <div className="snipcart-details">
                                    <FormAddCart productId={productId}/>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductItem.propTypes = {};

export default ProductItem;
