import React, {useEffect} from 'react'
import {Col, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import Product from '../components/Product.jsx';
import {listProducts} from "../actions/productActions";
import Message from '../components/Message';
import Loader from "../components/Loader";

const HomeScreen = () => {

    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);

    const {products, error, loading} = productList;
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <>
            <h1>Latest product</h1>
            {loading ?
                <Loader />
                : error ? <Message variant={'danger'} children={`${error}`} />
                    :
                    <Row>
                        {
                            products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xs={3}>
                                    <Product product={product}/>
                                </Col>
                            ))
                        }
                    </Row>}

        </>
    )
}

export default HomeScreen
