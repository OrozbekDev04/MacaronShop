// src/components/ProductCard.js
import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ImgCard from '../../../assets/ProductPic.png';
import DescriptionCard from '../simple/DescriptionCard';
import CardTitle from '../simple/CardTitle';
import Price from '../simple/Price';
import CartButton from '../simple/CartButton';
import { fetchProductsThunk } from '../../../redux/productSlice.js';

function ProductCard() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const productStatus = useSelector((state) => state.products.status);

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProductsThunk());
        }
    }, [productStatus, dispatch]);
    console.log('rrr',products);

    // Assuming you want to display the first product for simplicity

    return (
       <div className='flex flex-wrap gap-2 justify-between items-center'>
        {
            products.slice(0,6).map((product) => (
                <div className='w-[370px] h-[460px] border border-[#EDEDF0]  flex flex-col justify-between rounded-[5px]'>
                <img src={product.img } alt="" className='w-[370px] h-[300px] ' />
                <CardTitle title={product.name || "Сердце"}  />
                <DescriptionCard description={product.description || "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов "} />
                <div className='h-[50px] flex flex-row items-center justify-between border border-[#EDEDF0]'>
                    <Price price={product.price || "2800 сом"}  />
                    <CartButton />
                </div>
            </div>
            ))
        }
       </div>
    );
}

export default ProductCard;
