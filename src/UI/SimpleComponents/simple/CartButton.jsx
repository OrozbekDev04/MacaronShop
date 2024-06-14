import React from 'react'
import Cart from '../../../assets/Cart.svg'
import CartWhite from '../../../assets/CartWhite.svg'

function CartButton({bg, white}) {
  return (
    <div className={` h-full flex flex-row items-center gap-3 border-l border-l-[#EDEDF0] rounded-sm py-2 px-8 ${String(bg)}`}>
      {
        white === true ? (
          <img src={CartWhite} alt="" className=' h-[19px]' />
        ) : (
          <img src={Cart} alt="" className=' h-[19px]' />
        )
      }
      <p className=' text-[14px] font-montserrat'>В корзину</p>

    </div>
  )
}

export default CartButton