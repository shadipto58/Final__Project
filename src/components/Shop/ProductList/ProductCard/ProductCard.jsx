import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    console.log(product);

    const { _id, name, image, price } = product;

    return (

        <div className='flex flex-col justify-between group/edit border-2 hover:border-[#2C742F] rounded-lg group/item transition-all relative'>
            <div className='w-14 h-14 bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white flex justify-center items-center rounded-full text-4xl transition-all invisible group-hover/edit:visible absolute top-4 right-4'>
                <FaRegHeart />
            </div>
            <div className='max-w-[250] max-h-[250]'>
                <Link ><img src={image} className='mb-4 mx-auto max-w-full max-h-[200px] rounded-lg' alt="" /></Link>
            </div>
            <div className='flex justify-between p-3 items-center'>
                <div>
                    <Link ><h2 className='text-[#4D4D4D] group-hover/item:text-[#2C742F] group-hover/item:font-semibold'>{name}</h2></Link>
                    <p className='text-[##1A1A1A] font-medium'>$52.256</p>
                    <div className='flex items-center'>
                        <AiFillStar className='text-[#FF8A00] text-lg'></AiFillStar>
                        <AiFillStar className='text-[#FF8A00] text-lg'></AiFillStar>
                        <AiFillStar className='text-[#FF8A00] text-lg'></AiFillStar>
                        <AiFillStar className='text-[#FF8A00] text-lg'></AiFillStar>
                        <AiFillStar className='text-[#CCCCCC] text-lg'></AiFillStar>
                    </div>
                </div>
                <Link to='/myshoppingcart' onClick={() => ff(id)}>
                    <div className='w-14 h-14 bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white flex justify-center items-center rounded-full text-4xl transition-all'>
                        <HiOutlineShoppingCart />
                    </div>
                </Link>
            </div>
        </div>

    );
};

export default ProductCard;