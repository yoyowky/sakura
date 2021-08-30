
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import { signout } from './action/userAction.js';
import CartScreen from './screens/CartScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import SigninScreen from './screens/SigninScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import ShippingAddressScreen from './screens/ShippingAddressScreen.js';
import PaymentScreen from './screens/PaymentScreen.js';

function App() {
  const cart = useSelector(state=>state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout())
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="row">
            <div>
                <Link to="/" className="brand">SAKURA FLORAL</Link>
            </div>
            <div>
                <Link to="/cart">Cart
                  {cartItems.length>0 && <span className="badge">{cartItems.length}</span>}
                </Link>
                {
                  userInfo ?
                  (
                    <div className="dropdown">
                      <Link to="#">{userInfo.name}<i className="fa fa-caret-down"></i>{' '}</Link>
                      <ul className="dropdown-content">
                        <li >
                          <Link to="#signout" onClick={signoutHandler}>Sign out</Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link to="/signin">Sign In</Link>
                  )
                }
            </div>
          </header>
          <main>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path="/register" component={RegisterScreen}></Route>
            <Route path="/shipping" component={ShippingAddressScreen}></Route>
            <Route path="/payment" component={PaymentScreen}></Route>
          </main>
          <footer className="row center">
              <div>All right reserved</div>
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
