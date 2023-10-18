import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';
import BookingModal from './BookingModal/BookingModal';

const Product = () => {

    const [product, setProduct] = useState({});

    const productData = useLoaderData();
    //console.log(productData);
    const [bookingData, setBookingData] = useState({});


    return (
        <>
            <div className='my-12'>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center mb-8 sm:p-0 p-4'>
                        <h2 className='sm:text-[32px] text-[22px] text-[#1A1A1A] font-semibold sm:max-w-none max-w-[200px]'>Browse items by category <span></span></h2>

                    </div>
                    {/* grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 sm:p-0 p-4 */}
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 sm:p-0 p-4'>

                        {
                            productData.map(product => <ProductCard
                                key={product._id}
                                product={product}
                                setBookingData={setBookingData}
                            >

                            </ProductCard>)
                        }

                    </div>
                </div>
            </div>
            <BookingModal
                bookingData={bookingData}
            ></BookingModal>
        </>
    );
};

export default Product;