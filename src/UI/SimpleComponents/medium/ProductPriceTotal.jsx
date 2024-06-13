import React from 'react'
import Title from '../simple/Title'
import DescriptionCard from '../simple/DescriptionCard'
import Recipe from './Recipe'

function ProductPriceTotal() {
  return (
    <div className=' w-[570px] flex flex-col border'>
        <Title/>
        <DescriptionCard
          description={"40 макаронс в круглой коробке с персональной надписью"}
        />
        <Recipe
          col={4}
        />
    </div>
  )
}

export default ProductPriceTotal