import React from 'react'

const NavBar = () => {
    return (
        <div className="agileits_header">
            <div className="w3l_offers">
                <a href="products.html">Today's special Offers !</a>
            </div>

            <div className="w3l_search" >
                <form action="#" method="post" onChange={()=>{}}>
                    <input type="text" name="Product" placeholder="Search a product..."/>
                    <input type="submit" value=" "/>
                </form>
            </div>

            <div className="product_list_header">
                <form action="#" method="post" className="last">
                    <fieldset>
                        <input type="hidden" name="cmd" value="_cart"/>
                        <input type="hidden" name="display" value="1"/>
                        <input type="submit" name="submit" value="View your cart" className="button"/>
                    </fieldset>
                </form>
            </div>
            <div className="w3l_header_right">
                <ul>
                    <li className="dropdown profile_details_drop">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fas fa-user"
                                                                                          aria-hidden="true"/><span
                            className="caret"/></a>
                        <div className="mega-dropdown-menu">
                            <div className="w3ls_vegetables">
                                <ul className="dropdown-menu drp-mnu">
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="login.html">Sign Up</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="w3l_header_right1">
                <h2><a href="mail.html">Contact Us</a></h2>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

export default NavBar
