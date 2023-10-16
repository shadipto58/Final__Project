import React, { useState } from 'react';
import { FaStar, FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram, FaMinus, FaPlus, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import image from '../../assets/images/loo.png';
import { Link, useLoaderData } from 'react-router-dom';


const ProductDetails = () => {

    const [itemNumber, setItemNumber] = useState(1);


    const product = useLoaderData();
    //console.log(product);
    const { _id, name, price, img } = product;



    return (
        <div className='container mx-auto my-32'>
            <div className='flex flex-col lg:flex-row items-center justify-between'>
                <div className=''>
                    <img src={img} className='max-w-[300px] sm:max-w-[560px] lg:max-w-[560px] xl:max-w-2xl' alt="" />
                </div>
                <div className='px-5 lg:px-0'>
                    <h2 className='text-4xl font-semibold text-[#1A1A1A] mb-3'>{name}</h2>
                    <div className='text-[#FF8A00] flex'>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <p className='text-sm text-[#666]'>4 Review</p>
                    </div>
                    <div>
                        <h3 className='text-2xl text-[#2C742F] font-medium my-5'>${price}</h3>
                    </div>
                    <div className='py-6 border-y-2'>
                        <div className='flex flex-col sm:flex-row  sm:justify-between justify-start sm:items-center gap-3 items-start mb-4'>
                            <div className=''>
                                <h2 className='text-[#1A1A1A] font-bold'>Brand:<span className='font-normal'>Cocacola</span></h2>
                            </div>
                            <div className='flex items-center'>
                                <h2 className='text-[#1A1A1A] font-bold'>Share item:</h2>
                                <div className="flex items-center ms-3">
                                    <Link to=''>
                                        <div className='ring-2 ring-[#00B207] hover:ring-transparent w-10 h-10 bg-white hover:bg-[#00B207] hover:text-white transition-all flex justify-center items-center rounded-full text-xl me-3'>
                                            <FaFacebookF />
                                        </div>
                                    </Link>
                                    <Link to=''>
                                        <div className='ring-2 ring-[#00B207] hover:ring-transparent w-10 h-10 bg-white hover:bg-[#00B207] hover:text-white transition-all flex justify-center items-center rounded-full text-xl me-3'>
                                            <FaLinkedinIn />
                                        </div>
                                    </Link>
                                    <Link to=''>
                                        <div className='ring-2 ring-[#00B207] hover:ring-transparent w-10 h-10 bg-white hover:bg-[#00B207] hover:text-white transition-all flex justify-center items-center rounded-full text-xl me-3'>
                                            <FaInstagram />
                                        </div>
                                    </Link>
                                    <Link to=''>
                                        <div className='ring-2 ring-[#00B207] hover:ring-transparent w-10 h-10 bg-white hover:bg-[#00B207] hover:text-white transition-all flex justify-center items-center rounded-full text-xl me-3'>
                                            <FaTwitter />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='max-w-[568px] text-[#808080] text-sm'>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </p>
                        </div>
                    </div>
                    <div className='flex justify-between  items-center py-4'>
                        <div className='flex items-center p-3 gap-4 rounded-[170px] border-2 border-[#E6E6E6] bg-white'>
                            <button onClick={() => { if (itemNumber > 0) { setItemNumber((itemNumber) => itemNumber - 1) } }} className='bg-[#E6E6E6] w-9 h-9 rounded-full flex justify-center items-center'><FaMinus /></button>
                            <p>{itemNumber}</p>
                            <button onClick={() => setItemNumber((itemNumber) => itemNumber + 1)} className='bg-[#E6E6E6] w-9 h-9 rounded-full flex justify-center items-center'><FaPlus /></button>
                        </div>
                        <div className=''>
                            <button className='hidden sm:block  text-white font-semibold bg-[#00B207] rounded-[43px] py-4 px-10 lg:px-16 sm:px-28'>Add to Cart</button>
                        </div>
                        <Link to=''>
                            <div className=' w-14 h-14 ring-2 ring-[#00B207] hover:ring-transparent bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white flex justify-center items-center rounded-full text-4xl transition-all'>
                                <HiOutlineShoppingCart className='  group-hover:text-white'></HiOutlineShoppingCart>
                            </div>
                        </Link>
                        <Link>
                            <div className='w-14 h-14 ring-2 ring-[#00B207] hover:ring-transparent bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white flex justify-center items-center rounded-full text-4xl transition-all'>
                                <FaRegHeart />
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;