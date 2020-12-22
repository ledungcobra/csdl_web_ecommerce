import React from 'react'

const LeftBanner = () => {
    return (
        <div className="w3l_banner_nav_left">
            <nav className="navbar nav_bottom">
                <div className="navbar-header nav_2">
                    <button type="button" className="navbar-toggle collapsed navbar-toggle1"
                            data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                    <ul className="nav navbar-nav nav_1">
                        <li><a href="/products">Branded Foods</a></li>
                        <li><a href="household.html">Households</a></li>
                        <li className="dropdown mega-dropdown active">
                            <a href="#" className="dropdown-toggle"
                               data-toggle="dropdown">Veggies &amp; Fruits<span
                                className="caret"></span></a>
                            <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu"
                                 style={{display: "none"}}>
                                <div className="w3ls_vegetables">
                                    <ul>
                                        <li><a href="vegetables.html">Vegetables</a></li>
                                        <li><a href="vegetables.html">Fruits</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a href="kitchen.html">Kitchen</a></li>
                        <li><a href="short-codes.html">Short Codes</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle"
                               data-toggle="dropdown">Beverages<span className="caret"></span></a>
                            <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu"
                                 style={{display: "none"}}>
                                <div className="w3ls_vegetables">
                                    <ul>
                                        <li><a href="drinks.html">Soft Drinks</a></li>
                                        <li><a href="drinks.html">Juices</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a href="pet.html">Pet Food</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Frozen
                                Foods<span className="caret"></span></a>
                            <div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu"
                                 style={{display: "none"}}>
                                <div className="w3ls_vegetables">
                                    <ul>
                                        <li><a href="frozen.html">Frozen Snacks</a></li>
                                        <li><a href="frozen.html">Frozen Nonveg</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a href="bread.html">Bread &amp; Bakery</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default LeftBanner
