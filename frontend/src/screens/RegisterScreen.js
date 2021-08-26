import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../action/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const {userInfo, loading, error} = userRegister;
    const dispatch = useDispatch();
    const submitHandler = (e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert('assword and confirm password are not match!')
        } else {
            dispatch(register(name, email,password));
        }
    }
    const redirect = props.location.search
        ? props.location.search.split("=")[1]
        : '/';
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    },[userInfo,props.history,redirect])
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Create Account</h1>
                </div>
                {loading&&<LoadingBox></LoadingBox>}
                {error && <MessageBox>{error}</MessageBox>}
                <div>
                    <label>Name</label>
                    <input
                     type="text"
                     id="name"
                     placeholder="Enter Name"
                     required
                     onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
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
                    <label>Password</label>
                    <input
                     type="password"
                     id="password"
                     placeholder="Enter Password"
                     required
                     onChange={(e)=>setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                     type="password"
                     id="confirmPassword"
                     placeholder="Enter Confirm Password"
                     required
                     onChange={(e)=>setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label/>
                    <button
                     className="primary"
                     type="submit"
                    >Register</button>
                </div>
                <div>
                    Already have an account?{' '}
                    <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
                </div>
            </form>
        </div>
    )
}
