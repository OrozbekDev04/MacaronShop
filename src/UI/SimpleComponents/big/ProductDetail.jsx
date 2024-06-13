import React from 'react'
import ProductPic from '../medium/ProductPic'
import ProductPriceTotal from '../medium/ProductPriceTotal'

function ProductDetail() {
  return (
    <div className='w-full flex justify-between'>
        <ProductPic/>
        <ProductPriceTotal/>
    </div>
  )
}

export default ProductDetail