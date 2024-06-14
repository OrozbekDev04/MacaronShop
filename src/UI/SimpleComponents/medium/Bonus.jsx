import React from 'react'
import Bonus1 from '../../../assets/svg/Bonus1.svg'
import Bonus2 from '../../../assets/svg/Bonus2.svg'
import Bonus3 from '../../../assets/svg/Bonus3.svg'

function Bonus() {
  return (
    <div className=' flex flex-col gap-5'>
        <div className=' flex gap-10 px-1 items-center'>
            <img src={Bonus1} alt="" className=' w-[46px] h-[46px]'/>
            <h3>Доставка от 400 руб. в день заказа с 12 до 17 или с 17 до 21. Бесплатно при заказе на сумму от 2000 руб</h3>
        </div>
        <div className=' flex gap-10 px-1 items-center'>
            <img src={Bonus2} alt="" className=' w-[46px] h-[46px]' />
            <h3>Самовывоз бесплатно.Через 3 часа после оплаты заказа</h3>
        </div>
        <div className=' flex gap-10 px-1 items-center'>
            <img src={Bonus3} alt="" className=' w-[46px] h-[46px]'/>
            <h3>Можем преподнести как анонимный подарок:)</h3>
        </div>
    </div>
  )
}

export default Bonus