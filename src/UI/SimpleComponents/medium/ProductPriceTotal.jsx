import React from 'react'
import Title from '../simple/Title'
import DescriptionCard from '../simple/DescriptionCard'
import Recipe from './Recipe'
import Price from '../simple/Price'
import CartButton from '../simple/CartButton'
import Bonus from './Bonus'

function ProductPriceTotal() {
  return (
    <div className=' w-[570px] flex flex-col gap-4'>
        <Title />
        <DescriptionCard
          description={"40 макаронс в круглой коробке с персональной надписью"}
        />
        <Recipe
          col={4}
        />

        <div className=' flex flex-row justify-between border border-[#EDEDF0] rounded-md px-4 items-center py-5'>
          <Price
            price={"2800"}
          />
          <CartButton
            bg={"bg-[#E7426A] text-white"}
            white={true}
          />
        </div>

        <div>
          <Bonus/>
        </div>
    </div>
  )
}

export default ProductPriceTotal