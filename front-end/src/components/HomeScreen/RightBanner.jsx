import React from 'react'
class RightBanner extends React.Component {


    render() {
        return (
            <div>
                <div className="w3l_banner_nav_right">
                    <section className="slider">
                        <div className="flexslider">

                            <div className="flex-viewport" style={{overflow: "hidden", position: "relative"}}>
                                <ul className="slides"
                                    style={{
                                        width: "1000%",
                                        transitionDuration: "0s",
                                        transform: "translate3d(-1332px, 0px, 0px)"
                                    }}>
                                    <li className="clone" style={{width: "1332px", float: "left", display: "block"}}>
                                        <div className="w3l_banner_nav_right_banner2">
                                            <h3>upto <i>50%</i> off.</h3>
                                            <div className="more">
                                                <a href="/products"
                                                   className="button--saqui button--round-l button--text-thick"
                                                   data-text="Shop now">Shop now</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{width: "1332px", float: "left", display: "block"}}
                                        className="flex-active-slide">
                                        <div className="w3l_banner_nav_right_banner">
                                            <h3>Make your <span>food</span> with Spicy.</h3>
                                            <div className="more">
                                                <a href="/products"
                                                   className="button--saqui button--round-l button--text-thick"
                                                   data-text="Shop now">Shop now</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{width: "1332px", float: "left", display: "block"}} className="">
                                        <div className="w3l_banner_nav_right_banner1">
                                            <h3>Make your <span>food</span> with Spicy.</h3>
                                            <div className="more">
                                                <a href="/products"
                                                   className="button--saqui button--round-l button--text-thick"
                                                   data-text="Shop now">Shop now</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{width: "1332px", float: "left", display: "block"}} className="">
                                        <div className="w3l_banner_nav_right_banner2">
                                            <h3>upto <i>50%</i> off.</h3>
                                            <div className="more">
                                                <a href="/products"
                                                   className="button--saqui button--round-l button--text-thick"
                                                   data-text="Shop now">Shop now</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li style={{width: "1332px", float: "left", display: "block"}} className="clone">
                                        <div className="w3l_banner_nav_right_banner">
                                            <h3>Make your <span>food</span> with Spicy.</h3>
                                            <div className="more">
                                                <a href="/products"
                                                   className="button--saqui button--round-l button--text-thick"
                                                   data-text="Shop now">Shop now</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <ol className="flex-control-nav flex-control-paging">
                                <li><a className="flex-active">1</a></li>
                                <li><a className="">2</a></li>
                                <li><a className="">3</a></li>
                            </ol>
                            <ul className="flex-direction-nav">
                                <li><a className="flex-prev" href="#">Previous</a></li>
                                <li><a className="flex-next" href="#">Next</a></li>
                            </ul>
                        </div>
                    </section>

                </div>
            </div>
        )
    }
}


export default RightBanner
