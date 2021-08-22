
import { useSelector } from 'react-redux';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';

function App() {
  const cart = useSelector(state=>state.cart);
  const {cartItems} = cart;
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
                <Link to="/signin">Sign In</Link>
            </div>
          </header>
          <main>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
          </main>
          <footer className="row center">
              <div>All right reserved</div>
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
