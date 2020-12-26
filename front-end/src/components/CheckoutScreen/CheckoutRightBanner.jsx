import React from 'react';



const CheckoutRightBanner = () => {
    return (
        <div>
            <div >
                <div className="privacy about">
                    <h3>Chec<span>kout</span></h3>

                    <div className="checkout-left">
                        <div className="col-md-4 checkout-left-basket">
                            <h4>Continue to basket</h4>
                            <ul>
                                <li>Product1 <i>-</i> <span>$15.00 </span></li>
                                <li>Product2 <i>-</i> <span>$25.00 </span></li>
                                <li>Product3 <i>-</i> <span>$29.00 </span></li>
                                <li>Total Service Charges <i>-</i> <span>$15.00</span></li>
                                <li>Total <i>-</i> <span>$84.00</span></li>
                            </ul>
                        </div>
                        <div className="col-md-8 address_form_agile">
                            <h4>Add a new Details</h4>
                            <form action="/cart" method="post" className="creditly-card-form agileinfo_form">
                                <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                                    <div className="information-wrapper">
                                        <div className="first-row form-group">
                                            <div className="controls">
                                                <label className="control-label">Full name: </label>
                                                <input className="billing-address-name form-control" type="text"
                                                       name="name" placeholder="Full name" value ="Hello"/>
                                            </div>
                                            <div className="w3_agileits_card_number_grids">
                                                <div className="w3_agileits_card_number_grid_left">
                                                    <div className="controls">
                                                        <label className="control-label">Mobile number:</label>
                                                        <input className="form-control" type="text"
                                                               placeholder="Mobile number"/>
                                                    </div>
                                                </div>
                                                <div className="w3_agileits_card_number_grid_right">
                                                    <div className="controls">
                                                        <label className="control-label">Landmark: </label>
                                                        <input className="form-control" type="text"
                                                               placeholder="Landmark"/>
                                                    </div>
                                                </div>
                                                <div className="clear"/>
                                            </div>
                                            <div className="controls">
                                                <label className="control-label">Town/City: </label>
                                                <input className="form-control" type="text" placeholder="Town/City"/>
                                            </div>
                                            <div className="controls">
                                                <label className="control-label">Address type: </label>
                                                <select className="form-control option-w3ls">
                                                    <option>Office</option>
                                                    <option>Home</option>
                                                    <option>Commercial</option>

                                                </select>
                                            </div>
                                        </div>
                                        <button className="submit check_out">Delivery to this Address</button>
                                    </div>
                                </section>
                            </form>
                            <div className="checkout-right-basket">
                                <a href="/payment">Make a Payment <span
                                    className="glyphicon glyphicon-chevron-right" aria-hidden="true"/></a>
                            </div>
                        </div>
                        <div className="clearfix"/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CheckoutRightBanner;
