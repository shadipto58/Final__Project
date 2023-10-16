import React, { useState } from 'react';
import { FaMinus, FaPlus, FaTimesCircle, FaTimes } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";

const CartItemCard = ({ product }) => {
    //console.log(product);
    const { _id, name, price, img } = product;

    const [itemNumber, setItemNumber] = useState(1);

    return (
        <div>
            <div className='flex flex-col sm:flex-row justify-between border-b-2 p-3  gap-4 bg-[#B0D9B1]'>
                <div className='flex justify-between sm:justify-normal gap-3'>
                    <img src={img} className='w-[100px] h-[100px]' alt="" />
                    <div className='md:flex md:items-center md:gap-20 2xl:gap-40'>
                        <p className='text-[#1A1A1A] font-semibold '>{name}</p>
                        <div className='flex items-center justify-between max-w-[150px] p-3 gap-4 rounded-[170px] border-2 border-[#E6E6E6] bg-[#C8E4B2]'>
                            <button onClick={() => { if (itemNumber > 0) { setItemNumber((itemNumber) => itemNumber - 1) } }} className='bg-[#E6E6E6] w-9 h-9 rounded-full flex justify-center items-center'><FaMinus /></button>
                            <p>{itemNumber}</p>
                            <button onClick={() => setItemNumber((itemNumber) => itemNumber + 1)} className='bg-[#E6E6E6] w-9 h-9 rounded-full flex justify-center items-center'><FaPlus /></button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row sm:flex-col justify-between'>
                    <div className='text-2xl text-[#1A1A1A] font-semibold'>
                        <p>${price}</p>
                    </div>

                    <Link>
                        <div className='flex hover:underline underline-offset-2'>
                            <p className='text-xl'>Remove</p>
                            <button className='text-2xl text-[#808080] hover:text-[#C70039]'><MdDeleteForever></MdDeleteForever></button>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default CartItemCard;