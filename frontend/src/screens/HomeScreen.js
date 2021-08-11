import React, { useEffect, useState } from 'react';
import axios from 'axios';
import data from '../data.js';
import Product from '../components/Product.js';
import MessageBox from '../components/MessageBox.js';
import LoadingBox from '../components/LoadingBox.js';

export default function HomeScreen() {
    // use useState hook to manage the state of component，declare a new state variable products
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // useEffect is hook that happens when your component did mount to the webpage
    useEffect(() => { // 1st parameter function, 
        const fetchData = async ()=> {
            try{
                setLoading(true);
                const {data} = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            } catch(err){
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []) // 2nd parameter [], []is dependency, if no dependency, after rending conponent, use effect function will only run one time
    return (
        <div>
            {loading? (
                <LoadingBox></LoadingBox>
            ): error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ): (
            <div className="row center">
                {
                    products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                    ))
                }
            </div>
            )}
        </div>
    )
}
