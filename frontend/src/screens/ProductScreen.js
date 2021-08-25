import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../action/productAction.js';
import LoadingBox from '../components/LoadingBox.js';
import MessageBox from '../components/MessageBox.js';
import Rating from '../components/Rating.js';
// import data from '../data.js';

export default function ProductScreen(props) {
    // const product = data.products.find(product => product._id === props.match.params.id);
    const id = props.match.params.id;
    const productDetails = useSelector(state => state.productDetails);
    console.log('productDetails', productDetails)
    const {product, loading, error} = productDetails;
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(id))
    }, [dispatch, id]);
    const addToCartHandler = () => {
        props.history.push(`/cart/${id}?qty=${qty}`)
    }
    return (
        <div>
        {loading ? <LoadingBox></LoadingBox>
        :error ? <MessageBox variant="danger">{error}</MessageBox>
        : (
            <div>
            <Link to="/">Back to result</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating
                                rating={product.rating}
                                numReviews={product.numReviews}
                            ></Rating>
                        </li>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className=" card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.countInStock>0?(
                                            <span className="success">In stock</span>
                                        ):(
                                            <span className="danger">Unavailable</span>
                                        )}
                                    </div>
                                </div>
                            </li>
                            {
                                product.countInStock > 0 && (
                                <>
                                <div>{product.countInStock}</div>
                                <li>
                                    <div className="row">
                                    <div>Qty</div>
                                    <div>
                                        <select
                                            value={qty}
                                            onChange={(e)=>{setQty(e.target.value)}}
                                        >
                                            {[...Array(product.countInStock).keys()].map(
                                                (x)=>(
                                                    <option key={x+1} value={x+1}>{x+1}</option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                </div>
                                </li>
                                <li>
                                    <button className="primary block" onClick={addToCartHandler}>Add to Cart</button>
                                </li>
                                </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
                )
            }
        </div>
    )
}
