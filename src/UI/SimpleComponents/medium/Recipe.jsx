import React from 'react'

function Recipe({col}) {
  return (
    <div className=' w-full border border-[#EDEDF0] rounded-md p-7 flex flex-col gap-1'>
        <h2 className=' text-[18px] font-semibold-'>Вкусы:</h2>
        <div className=' w-full flex flex-col justify-between items-center text-[14px] font-normal gap-1 text-[#292929] opacity-80'>
            <div className=' w-full flex justify-between items-center'>
                <p>Яблоко</p>
                <div className=' w-full h-3 border-b border-[#EDEDF0] border-dotted'></div>
                <p className=''>{col}шт.</p>
            </div>
            <div className=' w-full flex justify-between items-center'>
                <p>Яблоко</p>
                <div className=' w-full h-3 border-b border-[#EDEDF0] border-dotted'></div>
                <p className=''>{col}шт.</p>
            </div>
            <div className=' w-full flex justify-between items-center'>
                <p>Яблоко</p>
                <div className=' w-full h-3 border-b border-[#EDEDF0] border-dotted'></div>
                <p className=''>{col}шт.</p>
            </div>
        </div>
    </div>
  )
}

export default Recipe