import React, {useEffect} from 'react';

import '../Commons/ProductItem.css'
import {useHistory} from 'react-router-dom';
import FormAddCart from "../Commons/FormAddCart";




const SingleProductItem = ({product}) => {
    console.log(product);
    const history = useHistory();

    const onClickProductHandler = (e) => {
        history.push(`/product/${product.productId}`);
    }

    return (
        <div className="col-md-3 w3ls_w3l_banner_left product-item">
            <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid1">
                        <figure>
                            <div className="snipcart-item block" >
                                <div className="snipcart-thumb">
                                    <img src={product.Thumbnail_URL} alt=" "
                                         className="img-responsive"/>
                                    <p className='product-text text-center'>{product.GD_Name}</p>
                                    <h4><span>{product.GD_Price}</span>{parseInt((100-product.GD_Discount_Rate)*product.GD_Price/100000)*1000}</h4>
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
                <div className="title-more">Kẻ Cắp Mặt Trăng</div>
                <p className="info">Tình trạng: Đang Cập Nhật</p>
                <p className="info">Lượt xem: 13,883</p>
                <p className="info">Lượt theo dõi: 59</p>
                <div className="list-tags">
                    <a className="blue" href="http://truyenqq.com/the-loai/drama-29.html">Drama</a><a className="blue"
                                                                                                      href="http://truyenqq.com/the-loai/manhwa-49.html">Manhwa</a><a
                    className="blue" href="http://truyenqq.com/the-loai/yaoi-70.html">Yaoi</a><a className="blue"
                                                                                                 href="http://truyenqq.com/the-loai/truyen-mau-92.html">Truyện
                    Màu</a></div>
                <div className="excerpt">Kwak Tae Bum, vận động viên bắn súng của đội tuyển quốc gia giành được huy
                    chương vàng Olympic,&nbsp;một người với tuổi trẻ vô cùng sáng lạn, đột nhiên gặp phải một vụ gây nạn
                    bỏ trốn, và xuất hiện trước mắt cậu ta là "ông chú cao lớn" đã từng biến mất trước mặt cậu khi còn
                    bé - Luna Eton.&nbsp;Nhưng mà, thân...
                </div>
            </div>
        </div>
    );
};

SingleProductItem.propTypes = {};

export default SingleProductItem;
