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

    // Assuming you want to display the first product for simplicity
    const product = products[0] || {};

    return (
        <div className='w-[370px] h-[460px] border border-[#EDEDF0] flex flex-col justify-between rounded-[5px]'>
            <img src={product.image || ImgCard} alt="" className='w-full' />
            <CardTitle title={product.title || "Сердце"} />
            <DescriptionCard description={product.description || "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов "} />
            <div className='h-[50px] flex flex-row items-center justify-between border border-[#EDEDF0]'>
                <Price price={product.price || "2800 сом"} />
                <CartButton />
            </div>
        </div>
    );
}

export default ProductCard;
