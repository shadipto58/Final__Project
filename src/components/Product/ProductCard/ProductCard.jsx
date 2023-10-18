import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';


const ProductCard = ({ product, setBookingData }) => {

    const { name, price, image, usingDeuration } = product;


    //console.log(productName);
    const handlename = (name, price) => {
        //console.log(name, 'clicked', price);
        const data = {
            name,
            price
        }
        setBookingData(data);
    }


    return (
        <>
            <Link to={`#`}>
                <div className='border-2 hover:border-[#FF7A00] rounded-lg hover:cursor-pointer sm:w-full w-[300px] mx-auto p-2 h-full flex flex-col gap-5 justify-between'>
                    <img src={image} className='mx-auto w-full rounded-t-lg' alt="" />
                    <div className='p-3 '>
                        <h2 className='text-xl text-[#FF7A00] font-semibold'>{name}</h2>
                        <p className='text-sm'>Resale Price: ${price}</p>
                        <p className='text-sm'>Original Price: $2587</p>
                        <p className='text-sm'>Using Deuration: {usingDeuration}</p>


                        <div onClick={() => handlename(name, price)}>
                            < button onClick={() => document.getElementById('booking__modal').showModal()} className="btn bg-[#FF7A00] text-white hover:bg-[#FF7A00] w-full mt-5"> Book Now</button >
                        </div>



                    </div>
                </div>
            </Link>

        </>
    );
};

export default ProductCard;