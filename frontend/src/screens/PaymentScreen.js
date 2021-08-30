import React, { useState } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import $ from 'jquery'
import { savePaymentMethod } from '../action/cartAction';
import { useDispatch, useSelector } from 'react-redux';

export default function PaymentScreen(props) {
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;
    if(!shippingAddress.address){
        props.history.push('/shipping');
    }
    const dispatch = useDispatch();
    const onSubmitHandler = (e)=> {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
        
    }

    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={onSubmitHandler}>
                <h1>Payment Method</h1>
                <div>
                    <input
                     type="radio"
                     id="paypal"
                     value="PayPal"
                     name="paymentMethod"
                     required
                     onClick={(e)=>{
                         setPaymentMethod(e.target.value);
                         $("#wechatimg")[0].classList.add("hide");
                        }}
                    ></input>
                    <label htmlFor="paypal">PayPal</label>
                </div>
                <div>
                    <input
                     type="radio"
                     id="wechat"
                     value="wechat"
                     name="paymentMethod"
                     required
                     onClick={(e)=>{
                         setPaymentMethod(e.target.value); 
                         $("#wechatimg")[0].classList.remove("hide");
                        }}
                    ></input>
                    <label htmlFor="wechat">WeChat</label>
                </div>
                <div id="wechatimg" className="hide">
                    <p>Please scan the QR code below：</p>
                    <img className="medium" src="/image/wechat-code.jpeg" alt="wechat code img"></img>
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}
