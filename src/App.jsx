import {useEffect, useState} from 'react'
import {useGetAllProductsQuery} from "./store/productApi.js";
import './App.css'

function App() {
    const [input, setInput] = useState('');
    const {data, isLoading, error} = useGetAllProductsQuery(input);
  return <>
      <div>
          <input type='text' onChange={(e) => setInput(e.target.value)}/>
          {!isLoading ?
          <ul style={{listStyle: 'none'}}>
          {data.products.map(product=><li key={product.id}>
          {product.title} - ${product.price}
              <hr/>
          </li>)}
          </ul> :
              <p>Loading...</p>
          }
      </div>
  </>
}

export default App
