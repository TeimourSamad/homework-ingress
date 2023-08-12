import { useEffect, useState } from 'react';
import './App.css';

import { carManufacturers } from './data';

const App = () => {

  const [search, setSearch] = useState('')

  const [filtered, setFiltered] = useState(carManufacturers)

  useEffect(() => {
    setFiltered(carManufacturers.filter(manufacturer => manufacturer.toLowerCase().includes(search)))
  }, [search])


  return (
    <div className='main-container'>
      <input onChange={e => setSearch(e.target.value.toLowerCase())} style={{marginTop: 50, marginBottom: 15}} placeholder='Search' />
      <div className='items-container'>
        {filtered.map(manufacturer => {
          return <span key={manufacturer} >{manufacturer} </span>
        })}
      </div>
    </div>
  );
}

export default App;
