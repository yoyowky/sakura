import React, { useEffect } from 'react';
import Product from '../components/Product.js';
import MessageBox from '../components/MessageBox.js';
import LoadingBox from '../components/LoadingBox.js';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../action/productAction.js';

export default function HomeScreen() {
    // // 1. USE HOOK and STATE IN COMPONENT
    // // use useState hook to manage the state of component，declare a new state variable products
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    // // useEffect is hook that happens when your component did mount to the webpage
    // useEffect(() => { // 1st parameter function, 
    //     const fetchData = async ()=> {
    //         try{
    //             setLoading(true);
    //             const {data} = await axios.get('/api/products');
    //             setLoading(false);
    //             setProducts(data);
    //         } catch(err){
    //             setError(err.message);
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, []) // 2nd parameter [], []is dependency, if no dependency, after rending conponent, use effect function will only run one time

    // 2. USE REDUX
    const productList = useSelector((state)=>state.productList);
    const {loading, error, products} = productList;
    const dispatch = useDispatch();
    useEffect(()=>{
        // dispatch action
        dispatch(listProducts());
    },[dispatch])
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
