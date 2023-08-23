import React from 'react'

import './photo.css'

const Image = ({products}) => {
  return (
    <div className='image-wrapper'>
        {products?.map(product => {
            return (
                <div key={product.id} className='image-container'>
                     <img className='image'  src={product.images[0]}/>
                </div>
            )
        })}
    </div>
  )
}

export default Image