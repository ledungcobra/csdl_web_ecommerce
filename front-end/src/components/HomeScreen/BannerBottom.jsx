import React from 'react';

const BottomBanner = () => {
    return (
        <div className="banner_bottom">
            <div className="wthree_banner_bottom_left_grid_sub">
            </div>
            <div className="wthree_banner_bottom_left_grid_sub1">
                <div className="col-md-4 wthree_banner_bottom_left">
                    <div className="wthree_banner_bottom_left_grid">
                        <img src="images/4.jpg" alt=" " className="img-responsive"/>
                        <div className="wthree_banner_bottom_left_grid_pos">
                            <h4>Discount Offer <span>25%</span></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 wthree_banner_bottom_left">
                    <div className="wthree_banner_bottom_left_grid">
                        <img src="images/5.jpg" alt=" " className="img-responsive"/>
                        <div className="wthree_banner_btm_pos">
                            <h3>introducing <span>best store</span> for <i>groceries</i></h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 wthree_banner_bottom_left">
                    <div className="wthree_banner_bottom_left_grid">
                        <img src="images/6.jpg" alt=" " className="img-responsive"/>
                        <div className="wthree_banner_btm_pos1">
                            <h3>Save <span>Upto</span> $10</h3>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="clearfix"></div>
        </div>
    );

};



export default BottomBanner;
