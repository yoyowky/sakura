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
                  <div key={product._id} className="card">
                    <a href={`/product/${product._id}`}>
                    <img className="medium" src={product.image} alt={product._id}/>
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>{product.name}</h2>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">
                            ${product.price}
                        </div>
                    </div>
                  </div>
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
