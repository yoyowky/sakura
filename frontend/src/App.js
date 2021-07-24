import Product from './components/Product.js';
import data from './data.js';

function App() {
  return (
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
            <div className="row center">
              {
                data.products.map((product) => (
                  <Product key="1" product={product}></Product>
                ))
              }
            </div>
        </main>
        <footer className="row center">
            <div>All right reserved</div>
        </footer>
    </div>
  );
}

export default App;
