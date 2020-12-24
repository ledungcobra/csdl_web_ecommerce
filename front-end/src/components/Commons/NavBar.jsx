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
                <form action="/cart" method="post" className="last">
                    <fieldset>
                        <input type="submit" name="submit" value="View your cart" className="button"/>
                    </fieldset>
                </form>
            </div>
            <div className="w3l_header_right">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <div className="w3l_header_right1">
                <h2><a href="mail.html">Contact Us</a></h2>
            </div>
            <div className="clearfix"/>
        </div>
    )
}

export default NavBar
