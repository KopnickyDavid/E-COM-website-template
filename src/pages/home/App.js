import './App.css';
import products from '../../data/products.json';

function App() {
  return (
    <div className="App-container">
      <div className='app-cointainer-products'>
      {products.map(product => (
        <div key={product.id} className="product">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
