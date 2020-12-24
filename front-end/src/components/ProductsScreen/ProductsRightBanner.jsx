import React from 'react';
import AdProduct from "./AdProduct";
import ProductRow from "./ProductRow";

const ProductRightBanner = () => {

    const goods = [
        {
            "Id_GD": 547563,
            "GD_Name": "Bộ Kích Sóng Wifi Repeater 300Mbps Totolink EX200 - Hàng Chính Hãng",
            "GD_Price": 195000,
            "GD_Remain": 0,
            "GD_Sold": 0,
            "GD_Discount_Rate": 29,
            "GD_Rating_AVG": 4,
            "Thumbnail_URL": "https://salt.tikicdn.com/cache/280x280/ts/product/9d/fa/1e/30d0c22525743d5a2e850e76dd52fe72.jpg",
            "Thumbnail_width": null,
            "Thumbnail_height": null,
            "Id_Good": null,
            "Id_TG": null,
            "Id_Supplier": null,
            "Supplier_Name": "Tiki Trading"
        },
        {
            "Id_GD": 588375,
            "GD_Name": "Điện Thoại Nokia 150 Dual Sim - Hàng Chính Hãng",
            "GD_Price": 599000,
            "GD_Remain": 0,
            "GD_Sold": 0,
            "GD_Discount_Rate": 17,
            "GD_Rating_AVG": 4.5,
            "Thumbnail_URL": "https://salt.tikicdn.com/cache/280x280/media/catalog/product/n/o/nokia150_black.u2751.d20170317.t170657.532932.jpg",
            "Thumbnail_width": null,
            "Thumbnail_height": null,
            "Id_Good": null,
            "Id_TG": null,
            "Id_Supplier": null,
            "Supplier_Name": "Điện Thoại Đại Đoàn Gia"
        }
    ];

    return (
        <div className="w3l_banner_nav_right">
            <div className="w3l_banner_nav_right_banner3">
                <h3>Best Deals For New Products<span className="blink_me"></span></h3>
            </div>
            <div className="w3l_banner_nav_right_banner3_btm">
                <AdProduct />
                <AdProduct />
                <AdProduct />
                <div className="clearfix"/>
            </div>
            <div className="w3ls_w3l_banner_nav_right_grid">
                <h3>Popular Brands</h3>
                <ProductRow products={goods} type={'Utensil'}/>
            </div>
        </div>
    );
};

export default ProductRightBanner;
