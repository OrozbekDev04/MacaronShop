import React from 'react'
import ProdPic from '../../../assets/ProductPic.png'

function ProductPic({pic}) {
  return (
    <div className=' w-[570px] flex flex-col gap-3'>
      <img src={ProdPic} alt="" className=' object-cover'/>
      <div className=' w-full h-[71.25px] flex gap-3'>
        <img src={ProdPic} alt="" className='w-[71.25px] object-cover rounded'/>
        <img src={ProdPic} alt="" className='w-[71.25px] object-cover rounded'/>
        <img src={ProdPic} alt="" className='w-[71.25px] object-cover rounded'/>
      </div>
    </div>
  )
}

export default ProductPic