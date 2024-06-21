import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import DescriptionCard from '../../UI/SimpleComponents/simple/DescriptionCard';
import CardTitle from '../../UI/SimpleComponents/simple/CardTitle';
import Price from '../../UI/SimpleComponents/simple/Price';
import CartButton from '../../UI/SimpleComponents/simple/CartButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsThunk } from '../../redux/productSlice';

const ProductsList = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const productStatus = useSelector((state) => state.products.status);

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProductsThunk());
        }
    }, [productStatus, dispatch]);

    return (
        <div className='mb-[41px]'>
            <div className="flex gap-[10px] mt-[41px]  justify-center ">
                <Link
                    to="/"
                    className="text-blue-400 cursor-pointer "


                >
                    Главная
                </Link>
                <span> <ChevronRightSharpIcon /> </span>
                <Link className="text-blue-400 cursor-pointer ">Каталог</Link>
                <span> <ChevronRightSharpIcon /></span>

                <p >Готовые наборы</p>
            </div>
            <h1 className="text-4xl text-center mb-[40px] mt-[22px] text-[#292929] ">Готовые наборы</h1>

            <div className='flex flex-wrap gap-8 justify-center items-center'>
                {
                    products.map((product, index) => (
                        <div key={index} className='relative overflow-hidden w-[370px] h-[460px] border border-[#EDEDF0] 
                 flex flex-col justify-between rounded-[5px]'>
                            <img src={product.img} alt="" className="block
                 w-[370px] h-[300px] transition-transform 
                duration-300 transform-gpu hover:scale-110"
                            />
                            <div className='w-[370px] shadow-xl absolute bottom-0 left-0 z-100 bg-white pt-4'>
                            <CardTitle title={product.name || "Сердце"}  />
                            <DescriptionCard description={product.description || "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов "} />
                            <div className='h-[50px] flex flex-row items-center justify-between border border-[#EDEDF0]'>
                                <Price price={product.price || "2800 сом"} />
                                <CartButton />
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsList
