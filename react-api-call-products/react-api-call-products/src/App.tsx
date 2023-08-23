import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Image from './ui/Photo/Image'

const App = () => {

  const [inputValue, setInputValue] = useState('')

  const [suggestedCategories, setSuggestedCategories] = useState()
  const [uniqueCategories, setUniqueCategories] = useState()
  const [products, setProducts] = useState([])

  const categoryURL = 'https://api.escuelajs.co/api/v1/categories'
  const productURL = 'https://api.escuelajs.co/api/v1/products'
  
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(productURL);
        setProducts(response.data)
      } catch (error) {
        console.error(error);
      }
     console.log(products)

    }
    fetchApi()

  }, [])

  const fetchBySearch = async (e) => {
    e.preventDefault()
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${inputValue}`)
    setProducts(response.data)
  }
  
  return (
    <div className='main-container'>
        <form onSubmit={fetchBySearch} className='search-container'>
          <input className='search-input' onChange={e => setInputValue(e.target.value)} placeholder='Search...' />
          <span className='search-title'>{inputValue.charAt(0).toUpperCase() + inputValue.slice(1)} Images</span>
        </form>
        <Image products={products} />
    </div>
  )
}

export default App
