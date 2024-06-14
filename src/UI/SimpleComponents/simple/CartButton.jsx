import Cart from '../../../assets/svg/Yusuf/bag.svg'

function CartButton() {
  return (
    <div className=' h-full flex flex-row items-center gap-4 border-l border-l-[#EDEDF0] pr-6'>
      <img src={Cart} alt="" className=' h-[19px] pl-4' />
      <p className=' text-[14px] font-[600]'>В корзину</p>
    </div>
  )
}

export default CartButton