import Cart from '../../../assets/svg/Yusuf/bag.svg'

function CartButton() {
  return (
    <button 
    className=' h-full flex flex-row items-center gap-4 border-l
     border-l-[#EDEDF0] pr-6 text-[14px] font-[600]'
       >
      <img src={Cart} alt="" className=' h-[19px] pl-4' />
      В корзину
    </button>
  )
}

export default CartButton