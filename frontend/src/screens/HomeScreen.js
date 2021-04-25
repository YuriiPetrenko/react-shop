import React, {useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions.js'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'

export default function HomeScreen() {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <h1>Products</h1>
            {
                loading ? (<Loader/>) 
                : error ? (<Message children={error}/>)
                : (
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product}/>
                            </Col>
                        ))}
                    </Row>
                )
            }
        </>
    )
}
