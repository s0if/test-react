import axios from 'axios';
import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [searshQuere, setSershQuere] = useState('');
  const [products, setproduct] = useState([]);
  const getProduct = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products`)
  }
  const getSershProduct = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/search?q=${searshQuere}`);
    setproduct(data.products);

  }
  useEffect(() => {
    getProduct();
  }, [])
  useEffect(() => {
    getSershProduct();
  }, [searshQuere])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>click {count}</button>
      <input type="text" value={searshQuere} onChange={e => setSershQuere(e.target.value)} />
      {products.map((product) =>
        <div key={product.id} className='product'>
          <h2>{product.title}</h2>
          <img src={product.thumbnail} />
        </div>
      )
      }

    </>
  )
}

export default App
