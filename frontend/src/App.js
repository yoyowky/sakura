
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
          <header className="row">
            <div>
                <a href="/" className="brand">SAKURA FLORAL</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
          </header>
          <main>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
          </main>
          <footer className="row center">
              <div>All right reserved</div>
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
