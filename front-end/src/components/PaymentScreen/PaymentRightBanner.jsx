import React from 'react';

const PaymentScreen = () => {
    return (
        <div className="w3l_banner_nav_right">
            <div className="privacy about">
                <h3>Pay<span>ment</span></h3>

                <div className="checkout-right">
                    <div id="parentHorizontalTab" style="display: block; width: 100%; margin: 0px;">
                        <ul className="resp-tabs-list hor_1">
                            <li className="resp-tab-item hor_1" aria-controls="hor_1_tab_item-0" role="tab"
                                style="background-color: rgb(245, 245, 245); border-color: rgb(193, 193, 193);">Cash on
                                delivery (COD)
                            </li>
                            <li className="resp-tab-item hor_1" aria-controls="hor_1_tab_item-1" role="tab"
                                style="background-color: rgb(245, 245, 245); border-color: rgb(193, 193, 193);">Credit/Debit
                            </li>
                            <li className="resp-tab-item hor_1 resp-tab-active" aria-controls="hor_1_tab_item-2"
                                role="tab" style="background-color: white; border-color: rgb(193, 193, 193);">Netbanking
                            </li>
                            <li className="resp-tab-item hor_1" aria-controls="hor_1_tab_item-3" role="tab"
                                style="background-color: rgb(245, 245, 245); border-color: rgb(193, 193, 193);">Paypal
                                Account
                            </li>
                        </ul>
                        <div className="resp-tabs-container hor_1" style="border-color: rgb(193, 193, 193);">

                            <h2 className="resp-accordion hor_1" role="tab" aria-controls="hor_1_tab_item-0"
                                style="background: none rgb(245, 245, 245); border-color: rgb(193, 193, 193);"><span
                                className="resp-arrow"/>Cash on delivery (COD)</h2>
                            <div className="resp-tab-content hor_1" aria-labelledby="hor_1_tab_item-0">
                                <div className="vertical_post check_box_agile">
                                    <h5>COD</h5>
                                    <div className="checkbox">
                                        <div className="check_box_one cashon_delivery">
                                            <label className="anim">
                                                <input type="checkbox" className="checkbox"/>
                                                <span> We also accept Credit/Debit card on delivery. Please Check with the agent.</span>
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <h2 className="resp-accordion hor_1" role="tab" aria-controls="hor_1_tab_item-1"
                                style="background-color: rgb(245, 245, 245); border-color: rgb(193, 193, 193);"><span
                                className="resp-arrow"/>Credit/Debit</h2>
                            <div className="resp-tab-content hor_1" aria-labelledby="hor_1_tab_item-1">
                                <form action="#" method="post" className="creditly-card-form agileinfo_form">
                                    <section className="creditly-wrapper wthree, w3_agileits_wrapper">
                                        <div className="credit-card-wrapper">
                                            <div className="first-row form-group">
                                                <div className="controls">
                                                    <label className="control-label">Name on Card</label>
                                                    <input className="billing-address-name form-control" type="text"
                                                           name="name" placeholder="John Smith"/>
                                                </div>
                                                <div className="w3_agileits_card_number_grids">
                                                    <div className="w3_agileits_card_number_grid_left">
                                                        <div className="controls">
                                                            <label className="control-label">Card Number</label>
                                                            <input className="number credit-card-number form-control"
                                                                   type="text" name="number" inputMode="numeric"
                                                                   autoComplete="cc-number" autocompletetype="cc-number"
                                                                   x-autocompletetype="cc-number"
                                                                   placeholder="•••• •••• •••• ••••"/>
                                                        </div>
                                                    </div>
                                                    <div className="w3_agileits_card_number_grid_right">
                                                        <div className="controls">
                                                            <label className="control-label">CVV</label>
                                                            <input className="security-code form-control"
                                                                   inputMode="numeric" type="text"
                                                                   name="security-code" placeholder="•••"/>
                                                        </div>
                                                    </div>
                                                    <div className="clear"/>
                                                </div>
                                                <div className="controls">
                                                    <label className="control-label">Expiration Date</label>
                                                    <input className="expiration-month-and-year form-control"
                                                           type="text" name="expiration-month-and-year"
                                                           placeholder="MM / YY"/>
                                                </div>
                                            </div>
                                            <button className="submit"><span>Make a payment </span></button>
                                        </div>
                                    </section>
                                </form>

                            </div>
                            <h2 className="resp-accordion hor_1 resp-tab-active" role="tab"
                                aria-controls="hor_1_tab_item-2"
                                style="background-color: white; border-color: rgb(193, 193, 193);"><span
                                className="resp-arrow"/>Netbanking</h2>
                            <div className="resp-tab-content hor_1 resp-tab-content-active"
                                 aria-labelledby="hor_1_tab_item-2" style="display:block">
                                <div className="vertical_post">
                                    <form action="#" method="post">
                                        <h5>Select From Popular Banks</h5>
                                        <div className="swit-radio">
                                            <div className="check_box_one">
                                                <div className="radio_one"><label><input type="radio" name="radio"
                                                                                         checked=""/><i></i>Syndicate
                                                    Bank</label></div>
                                            </div>
                                            <div className="check_box_one">
                                                <div className="radio_one"><label><input type="radio"
                                                                                         name="radio"/><i></i>Bank of
                                                    Baroda</label></div>
                                            </div>
                                            <div className="check_box_one">
                                                <div className="radio_one"><label><input type="radio"
                                                                                         name="radio"/><i/>Canara
                                                    Bank</label>
                                                </div>
                                            </div>
                                            <div className="check_box_one">
                                                <div className="radio_one"><label><input type="radio"
                                                                                         name="radio"/><i/>ICICI
                                                    Bank</label>
                                                </div>
                                            </div>
                                            <div className="check_box_one">
                                                <div className="radio_one"><label><input type="radio"
                                                                                         name="radio"/><i/>State Bank
                                                    Of India</label></div>
                                            </div>
                                            <div className="clearfix"/>
                                        </div>
                                        <h5>Or SELECT OTHER BANK</h5>
                                        <div className="section_room_pay">
                                            <select className="year">
                                                <option value="">=== Other Banks ===</option>
                                                <option value="ALB-NA">Allahabad Bank NetBanking</option>
                                                <option value="ADB-NA">Andhra Bank</option>
                                                <option value="BBK-NA">Bank of Bahrain and Kuwait NetBanking</option>
                                                <option value="BBC-NA">Bank of Baroda Corporate NetBanking</option>
                                                <option value="BBR-NA">Bank of Baroda Retail NetBanking</option>
                                                <option value="BOI-NA">Bank of India NetBanking</option>
                                                <option value="BOM-NA">Bank of Maharashtra NetBanking</option>
                                                <option value="CSB-NA">Catholic Syrian Bank NetBanking</option>
                                                <option value="CBI-NA">Central Bank of India</option>
                                                <option value="CUB-NA">City Union Bank NetBanking</option>
                                                <option value="CRP-NA">Corporation Bank</option>
                                                <option value="DBK-NA">Deutsche Bank NetBanking</option>
                                                <option value="DCB-NA">Development Credit Bank</option>
                                                <option value="DC2-NA">Development Credit Bank - Corporate</option>
                                                <option value="DLB-NA">Dhanlaxmi Bank NetBanking</option>
                                                <option value="FBK-NA">Federal Bank NetBanking</option>
                                                <option value="IDS-NA">Indusind Bank NetBanking</option>
                                                <option value="IOB-NA">Indian Overseas Bank</option>
                                                <option value="ING-NA">ING Vysya Bank (now Kotak)</option>
                                                <option value="JKB-NA">Jammu and Kashmir NetBanking</option>
                                                <option value="JSB-NA">Janata Sahakari Bank Limited</option>
                                                <option value="KBL-NA">Karnataka Bank NetBanking</option>
                                                <option value="KVB-NA">Karur Vysya Bank NetBanking</option>
                                                <option value="LVR-NA">Lakshmi Vilas Bank NetBanking</option>
                                                <option value="OBC-NA">Oriental Bank of Commerce NetBanking</option>
                                                <option value="CPN-NA">PNB Corporate NetBanking</option>
                                                <option value="PNB-NA">PNB NetBanking</option>
                                                <option value="RSD-DIRECT">Rajasthan State Co-operative Bank-Debit
                                                    Card
                                                </option>
                                                <option value="RBS-NA">RBS (The Royal Bank of Scotland)</option>
                                                <option value="SWB-NA">Saraswat Bank NetBanking</option>
                                                <option value="SBJ-NA">SB Bikaner and Jaipur NetBanking</option>
                                                <option value="SBH-NA">SB Hyderabad NetBanking</option>
                                                <option value="SBM-NA">SB Mysore NetBanking</option>
                                                <option value="SBT-NA">SB Travancore NetBanking</option>
                                                <option value="SVC-NA">Shamrao Vitthal Co-operative Bank</option>
                                                <option value="SIB-NA">South Indian Bank NetBanking</option>
                                                <option value="SBP-NA">State Bank of Patiala NetBanking</option>
                                                <option value="SYD-NA">Syndicate Bank NetBanking</option>
                                                <option value="TNC-NA">Tamil Nadu State Co-operative Bank NetBanking
                                                </option>
                                                <option value="UCO-NA">UCO Bank NetBanking</option>
                                                <option value="UBI-NA">Union Bank NetBanking</option>
                                                <option value="UNI-NA">United Bank of India NetBanking</option>
                                                <option value="VJB-NA">Vijaya Bank NetBanking</option>
                                            </select>
                                        </div>
                                        <input type="submit" value="PAY NOW"/>
                                    </form>
                                </div>
                            </div>
                            <h2 className="resp-accordion hor_1" role="tab" aria-controls="hor_1_tab_item-3"
                                style="background-color: rgb(245, 245, 245); border-color: rgb(193, 193, 193);"><span
                                className="resp-arrow"/>Paypal Account</h2>
                            <div className="resp-tab-content hor_1" aria-labelledby="hor_1_tab_item-3">
                                <div id="tab4" className="tab-grid" style="display: block;">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img className="pp-img" src="images/paypal.png" alt="Image Alternative text"
                                                 title="Image Title"/>
                                            <p>Important: You will be redirected to PayPal's website to securely
                                                complete your payment.</p><a className="btn btn-primary">Checkout
                                            via Paypal</a>
                                        </div>
                                        <div className="col-md-6">
                                            <form className="cc-form">
                                                <div className="clearfix">
                                                    <div className="form-group form-group-cc-number">
                                                        <label>Card Number</label>
                                                        <input className="form-control"
                                                               placeholder="xxxx xxxx xxxx xxxx" type="text"/><span
                                                        className="cc-card-icon"/>
                                                    </div>
                                                    <div className="form-group form-group-cc-cvc">
                                                        <label>CVV</label>
                                                        <input className="form-control" placeholder="xxxx" type="text"/>
                                                    </div>
                                                </div>
                                                <div className="clearfix">
                                                    <div className="form-group form-group-cc-name">
                                                        <label>Card Holder Name</label>
                                                        <input className="form-control" type="text"/>
                                                    </div>
                                                    <div className="form-group form-group-cc-date">
                                                        <label>Valid Thru</label>
                                                        <input className="form-control" placeholder="mm/yy"
                                                               type="text"/>
                                                    </div>
                                                </div>
                                                <div className="checkbox checkbox-small">
                                                    <label>
                                                        <input className="i-check" type="checkbox" checked=""/>Add to My
                                                        Cards</label>
                                                </div>
                                                <input className="btn btn-primary submit" type="submit"
                                                       value="Proceed Payment"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PaymentScreen;
