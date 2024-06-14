import React from 'react'
import ReadyMadeSets from '../../UI/SimpleComponents/big/ReadyMadeSets'
import Button from '../../UI/SimpleComponents/simple/Button'
import Title from '../../UI/SimpleComponents/simple/Title'
import Filter from '../../UI/SimpleComponents/simple/Filter'

function ProductSetPage() {
  return (
    <div className=' miniContainer mx-auto flex flex-col justify-center items-center gap-[50px]'>
      <Title/>
      <div className=' w-full flex flex-row gap-1'>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
        <Filter/>
      </div>
      <ReadyMadeSets/>
      <Button/>
    </div>
  )
}

export default ProductSetPage