import axios from 'axios';
import React, { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [searshQuere, setSershQuere] = useState('');
  const [proudcts, setProudct] = useState([]);
  const getProduct = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products`)
    
   
  }
  const getSershProduct = async () => {
    const { data } = await axios.get(`https://dummyjson.com/products/search?q=${searshQuere}`);
    setProudct(data.proudcts);
   
  }
  useEffect(() => {
    getProduct();
  }, [])

  getSershProduct();
  return (
    <>
      <button onClick={() => setCount(count + 1)}>click {count}</button>
      <input type="text" value={searshQuere} onChange={e => setSershQuere(e.target.value)} />
      {
       proudcts.map(proudct => {
            <div key={proudct.id} className='proudct'>
              <h2>{proudct.title}</h2>
              <img src={proudct.thumbnail} />
            </div>
            }
        )
      } 
    </>
  )
}

export default App
