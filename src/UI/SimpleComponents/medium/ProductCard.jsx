import React from 'react'
import ImgCard from '../../../assets/img/Product.png'
import DescriptionCard from '../simple/DescriptionCard'
import CardTitle from '../simple/CardTitle'
import Price from '../simple/Price'
import CartButton from '../simple/CartButton'

function ProductCard() {
  return (
    <div className=' w-[370px] h-[460px] border border-[#EDEDF0] flex flex-col justify-between rounded-[5px]'>
        <img src={ImgCard} alt="" className=' w-full' />
        <CardTitle
            title={"Сердце"}
        />
        <DescriptionCard
            description={"24 штуки в коробке в виде сердца. Ассорти из 6 вкусов "}
        />
        <div className=' h-[50px] flex flex-row items-center justify-between border border-[#EDEDF0]'>
            <Price
                price={"2800"}
            />
            <CartButton/>
        </div>
    </div>
  )
}

export default ProductCard