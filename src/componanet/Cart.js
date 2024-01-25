import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, deleteFromCart } from '../rtk/slices/cart-slice'

export default function Cart() {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const totlaPrice = cart.reduce((acc, prod) => {
        acc += prod.price * prod.qtn
        return acc
    }, 0)
    return (
        <Container>
            <h1 className='py-5'>Welcome To Your Cart!</h1>
            <Button className='mb-3' variant='info' onClick={() => dispatch(clearCart())}>Clear</Button>
            <h2>Totla : {totlaPrice.toFixed(2)}$</h2>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>َQTN</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((el) => {
                        return (
                            <tr key={el.id}>
                                <td>{el.id}</td>
                                <td><img style={{ height: "120px", width: "100px" }} src={el.image} ></img></td>
                                <td>{el.title}</td>
                                <td>{el.price}</td>
                                <td>{el.qtn}</td>
                                <td><Button variant='danger' onClick={() => dispatch(deleteFromCart(el))} >Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
