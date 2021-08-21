import React from 'react';

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search?props.location.search.split("=")[1]:1;
    console.log('qty', qty)
    return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : {productId}: Qty: {qty}
      </p>
    </div>
    )
}
