import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector((state)=>state.userSignin);
    const {loading, error, userInfo} = userSignin;
    const redirect = props.location.search 
        ? props.location.search.split('=')[1]
        : '/';
    console.log('redirect', redirect)
    const dispatch = useDispatch();
    const submitHandler = (e)=>{
        e.preventDefault(); // prevent refreshing the page
        dispatch(signin(email, password));
    }
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    },[userInfo, props.history, redirect])
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Please sign in.</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox>{error}</MessageBox>}
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                     type="email"
                     id="email"
                     placeholder="Enter Email"
                     required
                     onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                     type="password"
                     id="password"
                     placeholder="Enter Password"
                     required
                     onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label/>
                    <button
                     className="primary"
                     type="submit"
                    >Sign In</button>
                </div>
                <div>
                    <label/>
                    <div>New customer? <Link to="/">Create your account</Link></div>
                </div>
            </form>
        </div>
    )
}
