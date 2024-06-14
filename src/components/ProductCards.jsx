// import React from 'react'
import ReadyMadeSets from '../UI/SimpleComponents/big/ReadyMadeSets'
import Button from '../UI/SimpleComponents/simple/Button';
import Title from '../UI/SimpleComponents/simple/Title.jsx';


function ProductSetPage() {
    return (
        <div className=' miniContainer  mx-auto flex flex-col justify-center items-center gap-[42px] mt-[100px]'>
            <Title/>
            <ReadyMadeSets/>
            <Button/>
        </div>
    )
}

export default ProductSetPage