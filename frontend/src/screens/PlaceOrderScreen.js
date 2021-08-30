import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps'
import store from '../store'

export default function PlaceOrderScreen(props) {
    const cart = useSelector(state => state.cart);
    const {cartItems, shippingAddress, paymentMethod} = cart;
    if (!paymentMethod) {
        props.history.push('/payment');
      }
    const fixPrice = (num) => num.toFixed(2); // 1.111111=>1.11
    cart.itemsPrice = fixPrice(cartItems.reduce((a,c)=>a+c.price*c.qty, 0));
    cart.shippingPrice = cart.itemsPrice>100 ? fixPrice(0) : fixPrice(10);
    cart.taxPrice = fixPrice(cart.itemsPrice*1.13);
    cart.totalPrice = fixPrice(Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice));
    const placeOrderHandler = ()=>{
        console.log('111')
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="card card-body">
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Name:</strong> {shippingAddress.fullName}<br/>
                                    <strong>Address:</strong> {shippingAddress.address}, {shippingAddress.city}, {shippingAddress.postalCode}, {shippingAddress.country}
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="card card-body">
                            <h2>Payment</h2>
                            <p>
                            <strong>Method:</strong> {paymentMethod}
                            </p>
                        </div>
                        </li>
                        <li>
                            <div className="card card-body">
                                <h2>Order Items</h2>
                                <ul>
                                    {cartItems.map((item)=>(
                                        <li key={item.product}>
                                            <div className="row">
                                                <div>
                                                    <img src={item.image} alt={item.name} className="small"></img>
                                                </div>
                                                <div className="min-30">
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </div>
                                                <div>{item.qty} x ${item.price} = ${item.qty * item.price}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <h2>Order Summary</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Items: </div>
                                    <div>{cart.itemsPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Shipping: </div>
                                    <div>{cart.shippingPrice}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Tax: </div>
                                    <div>{cart.taxPrice}</div>
                                </div>
                            </li>
                            <hr/>
                            <li>
                                <div className="row">
                                    <div>Order Total: </div>
                                    <div>{cart.totalPrice}</div>
                                </div>
                            </li>
                            <li>
                                <button
                                 type="button"
                                 onClick={placeOrderHandler}
                                 className="primary block"
                                 disabled={cartItems.length === 0}
                                >
                                    Place Order
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
