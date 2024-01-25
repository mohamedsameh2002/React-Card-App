import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Col, Row } from 'react-bootstrap';
import { fetchProducts } from "../rtk/slices/Product-slice"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../rtk/slices/cart-slice';
export default function Product() {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <Container className='py-5'>
            <Row className='py-5'>
                {products.map((el) => {
                    return (
                        <Col key={el.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img style={{ height: "300px" }} variant="top" src={el.image} />
                                <Card.Body>
                                    <Card.Title>{el.title}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <p>{el.price}$</p>
                                    <Button variant="primary" onClick={() => dispatch(addToCart(el))}>Add To Cart</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}

            </Row>
        </Container>


    )
}
