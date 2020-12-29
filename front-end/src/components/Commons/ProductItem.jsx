import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './ProductItem.css'
import {useHistory} from 'react-router-dom';

import FormAddCart from './FormAddCart'


const ProductItem = ({product}) => {

    const history = useHistory();

    const onClickProductHandler = (e) => {
        history.push(`/product/${product.productId}`);
    }

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
                                <div className="snipcart-thumb" onClick={onClickProductHandler}>
                                    <img src={product.imageUrl} alt=" "
                                         className="img-responsive"/>
                                    <p className='product-text text-center'>{product.productName}</p>
                                    <h4 className='text-center text-danger'><span className='text-dark'>{(product.stockPrice)}</span>   -{product.discount}%</h4>
                                    <h4 className='text-center'>{(product.currentPrice)}</h4>
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
