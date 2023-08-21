import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

  const [inputValue, setInputValue] = useState('')

  // const options = {
  //   method: 'GET',
  //   url: 'https://my-store2.p.rapidapi.com/catalog/products',
  //   headers: {
  //     'X-RapidAPI-Key': '7b2c80df08mshf3ef68513351e76p1f39a6jsn045db9b89cc3',
  //     'X-RapidAPI-Host': 'my-store2.p.rapidapi.com'
  //   }
  // };

  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchApi()
  //   console.log(products)
  // }, [])

  return (
    <div className='main-container'>
      <input className='search-input' onChange={e => setInputValue(e.target.value)} placeholder='Search...' />
      <span className='search-title'>Images</span>
    </div>
  )
}

export default App
