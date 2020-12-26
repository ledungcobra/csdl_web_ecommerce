import React, {useEffect} from 'react';

import '../Commons/ProductItem.css'
import {useHistory} from 'react-router-dom';
import FormAddCart from "../Commons/FormAddCart";
import {ListGroup} from "react-bootstrap";




const SingleProductItem = ({product}) => {
    console.log(product);
    const history = useHistory();

    const onClickProductHandler = (e) => {
        history.push(`/product/${product.productId}`);
    }

    return (
        <div className="col-md-3 w3ls_w3l_banner_left product-item mt-lg-3">
            <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid1">
                        <figure>
                            <div className="snipcart-item block" >
                                <div className="snipcart-thumb">
                                    <img src={product.Thumbnail_URL} alt=" "
                                         className="img-responsive"/>
                                    <p className='product-text text-center'>{product.GD_Name}</p>
                                    <h4 className='text-center text-danger'><span className='text-dark'>{product.GD_Price}</span>  -{product.GD_Discount_Rate}%</h4>
                                    <h4 className='text-center'>{parseInt((100-product.GD_Discount_Rate)*product.GD_Price/100000)*1000}</h4>
                                </div>
                                <div className="snipcart-details">
                                    <FormAddCart
                                        key={product.Id_GD}
                                        productId={product.Id_GD}/>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
            <div className="detail-content">
                <ListGroup variant='flush'>
                    <ListGroup.Item><div className="title-more"><p>Tên: {product.GD_Name}</p></div></ListGroup.Item>
                <ListGroup.Item>  <p className="info">Số lượng tồn:{product.GD_Remain}</p></ListGroup.Item>
                <ListGroup.Item>  <p className="info">Số lượng đã bán:{product.GD_Sold}</p></ListGroup.Item>
                <ListGroup.Item> <p className="info">Size: {product.GD_Size}</p></ListGroup.Item>
                <ListGroup.Item><p className="info">Màu sắc:{product.GD_Color}</p></ListGroup.Item>
                <ListGroup.Item><p className="info">Màu sắc:{product.GD_Color}</p></ListGroup.Item>
                </ListGroup>



                <div className="list-tags">

                </div>
                <div className="excerpt">

                </div>
            </div>
        </div>
    );
};

SingleProductItem.propTypes = {};

export default SingleProductItem;
