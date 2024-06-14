import React from 'react'

function Price({price}) {
  return (
    <div>
      <p className=' text-[#E7426A] font-semibold text-[24px] tracking-wide font-montserrat pl-5'>{price} сом</p>
    </div>
  )
}

export default Price