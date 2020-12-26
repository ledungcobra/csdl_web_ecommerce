import React, {useEffect, useState} from 'react';
import BreadCrumb from "../components/Commons/BreadCrumb";
import LeftBanner from "../components/Commons/LeftBanner";
import {useDispatch, useSelector} from "react-redux";
import {searchProducts} from "../actions/productActions";
import {load} from "dotenv";
import {Col, Pagination, Row, Spinner} from "react-bootstrap";
import Message from "../components/Commons/Message";
import ProductRow from "../components/ProductsScreen/ProductRow";
import {useHistory} from 'react-router-dom';
import RightBanner from "../components/HomeScreen/RightBanner";

const SearchScreen = () => {

    const {location} = window;
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const {products, error, loading} = useSelector(state => state.searchProducts);
    const [productHTMLS, setProductHTML] = useState([]);
    const [searchObj, setSearchObj] = useState({});
    const searchStrings = location.search.slice(1).split('&');
    const history = useHistory();

    useEffect(() => {

        searchStrings.forEach((search) => {
            setSearchObj((prev) => {
                prev[search.split('=')[0]] = search.split('=')[1];
                return prev
            })
        });

        setCurrentPage(parseInt(searchObj.page));
        dispatch(searchProducts(searchObj));

    }, []);

    useEffect(() => {

        if (products) {
            let result = [];
            let product = [];

            for (let i = 0; i < products.length; i += 1) {

                product.push(products[i]);
                if ((i + 1) % 4 === 0) {
                    result.push(product);
                    product = []
                }
            }
            setProductHTML(result);
        }
    }, [products])

    const onClickPageHandler = (e) => {
        console.log('Run');
        history.push(`/search?page=${e.target.innerHTML}&limit=20&keyword=${searchObj.keyword}`)
        window.location.reload();
    }

    return (
        <div>
            <BreadCrumb title={'Seach'}/>
            <div className="banner">
                {/*<LeftBanner style = {{*/}
                {/*    minHeight: "100vh"*/}
                {/*}} />*/}
                {
                    loading && <div className={'py-3'} style={{textAlign: "center"}}>
                        <Spinner style={{margin: "0 auto"}} animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>

                }
                {
                    error && <Message message={error} variant={'text-warning'} show={error}/>
                }
                {
                    productHTMLS.map(products => <ProductRow products={products}/>)
                }
                <div className="clearfix"/>
                {
                    <Row>
                        <Col md={8}/>
                        <Col>
                            <Pagination
                                style={{maxWidth: "100%"}}
                                onClick={onClickPageHandler}>
                                <Pagination.First  />
                                <Pagination.Prev/>
                                {
                                    [currentPage - 3
                                        , currentPage - 2
                                        , currentPage - 1
                                        , currentPage
                                        , currentPage + 1
                                        , currentPage + 2
                                        , currentPage + 3].map(
                                        page => {
                                            if (page <= 0) {
                                                return;
                                            }
                                            if (page === currentPage) {
                                                return <Pagination.Item active>{currentPage}</Pagination.Item>
                                            }
                                            return (<Pagination.Item
                                            >{page}
                                            </Pagination.Item>)
                                        })
                                }

                                <Pagination.Ellipsis/>
                                <Pagination.Next/>
                                <Pagination.Last/>
                            </Pagination>
                        </Col>
                    </Row>
                }
            </div>
        </div>
    );
};

export default SearchScreen;
