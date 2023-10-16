import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus, FaTimesCircle, FaTimes } from "react-icons/fa";
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import CartItemCard from './CartItemCard/CartItemCard';


const Cart = () => {

    const [data, setData] = useState([])

    // const product = useLoaderData();

    // const { _id, name, price, img } = product;



    return (
        <div className='container mx-auto my-20 px-5'>
            <div className='flex flex-col lg:flex-row justify-between gap-10'>
                <div className='lg:w-[65%]  rounded-lg'>
                    {/* <CartItemCard

                    ></CartItemCard> */}
                    {/* <div className='flex flex-col sm:flex-row justify-between border-b-2 p-3  gap-4 bg-[#B0D9B1]'>
                        <div className='flex justify-between sm:justify-normal gap-3'>
                            <img src="./../../../public/images/cool.png" className='w-[100px] h-[100px]' alt="" />
                            <div className='md:flex md:items-center md:gap-20 2xl:gap-40'>
                                <p className='text-[#1A1A1A] font-semibold '>Green Capsicum</p>
                                <div className='flex items-center justify-between max-w-[150px] p-3 gap-4 rounded-[170px] border-2 border-[#E6E6E6] bg-[#C8E4B2]'>
                                    <button onClick={() => { if (itemNumber > 0) { setItemNumber((itemNumber) => itemNumber - 1) } }} className='bg-[#E6E6E6] w-9 h-9 rounded-full flex justify-center items-center'><FaMinus /></button>
                                    <p>{itemNumber}</p>
                                    <button onClick={() => setItemNumber((itemNumber) => itemNumber + 1)} className='bg-[#E6E6E6] w-9 h-9 rounded-full flex justify-center items-center'><FaPlus /></button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row sm:flex-col justify-between'>
                            <div className='text-2xl text-[#1A1A1A] font-semibold'>
                                <p>$520.256</p>
                            </div>

                            <Link>
                                <div className='flex hover:underline underline-offset-2'>
                                    <p className='text-xl'>Remove</p>
                                    <button className='text-2xl text-[#808080] hover:text-[#C70039]'><MdDeleteForever></MdDeleteForever></button>
                                </div>
                            </Link>

                        </div>
                    </div> */}
                    {/* <div className='flex flex-col sm:flex-row justify-between border-b-2 p-3  gap-4 bg-[#B0D9B1]'>
                        <div className='flex justify-between sm:justify-normal gap-3'>
                            <img src="./../../../public/images/cool.png" className='w-[100px] h-[100px]' alt="" />
                            <div className='md:flex md:items-center md:gap-20 2xl:gap-40'>
                                <p className='text-[#1A1A1A] font-semibold '>Green Capsicum</p>
                                <div className='flex items-center justify-between max-w-[150px] p-3 gap-4 rounded-[170px] border-2 border-[#E6E6E6] bg-[#C8E4B2]'>
                                    <button onClick={() => { if (itemNumber > 0) { setItemNumber((itemNumber) => itemNumber - 1) } }} className='bg-[#E6E6E6] w-9 h-9 rounded-full flex justify-center items-center'><FaMinus /></button>
                                    <p>{itemNumber}</p>
                                    <button onClick={() => setItemNumber((itemNumber) => itemNumber + 1)} className='bg-[#E6E6E6] w-9 h-9 rounded-full flex justify-center items-center'><FaPlus /></button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row sm:flex-col justify-between'>
                            <div className='text-2xl text-[#1A1A1A] font-semibold'>
                                <p>$520.256</p>
                            </div>
                            <div className=''>
                                REMOVE
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between border-b-2 p-3  gap-4 bg-[#B0D9B1]'>
                        <div className='flex justify-between sm:justify-normal gap-3'>
                            <img src="./../../../public/images/cool.png" className='w-[100px] h-[100px]' alt="" />
                            <div className='md:flex md:items-center md:gap-20 2xl:gap-40'>
                                <p className='text-[#1A1A1A] font-semibold '>Green Capsicum</p>
                                <div className='flex items-center justify-between max-w-[150px] p-3 gap-4 rounded-[170px] border-2 border-[#E6E6E6] bg-[#C8E4B2]'>
                                    <button onClick={() => { if (itemNumber > 0) { setItemNumber((itemNumber) => itemNumber - 1) } }} className='bg-[#E6E6E6] w-9 h-9 rounded-full flex justify-center items-center'><FaMinus /></button>
                                    <p>{itemNumber}</p>
                                    <button onClick={() => setItemNumber((itemNumber) => itemNumber + 1)} className='bg-[#E6E6E6] w-9 h-9 rounded-full flex justify-center items-center'><FaPlus /></button>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row sm:flex-col justify-between'>
                            <div className='text-2xl text-[#1A1A1A] font-semibold'>
                                <p>$520.256</p>
                            </div>
                            <div className=''>
                                REMOVE
                            </div>
                        </div>
                    </div> */}
                </div>

                {/* ///////////////// */}

                <div className='lg:w-[30%]'>
                    <div className='border-2 rounded-lg p-4'>
                        <h2 className='text-[#1A1A1A] text-xl font-semibold mb-3'>Cart Total</h2>
                        <table className='w-full'>
                            <tbody>
                                <tr className='border-t-2'>
                                    <td className='text-[#4D4D4D] py-4'>Subtotal:</td>
                                    <td className='text-end py-3'>$52.25</td>
                                </tr>
                                <tr className='border-t-2'>
                                    <td className='text-[#4D4D4D] py-4'>Shipping cost:</td>
                                    <td className='text-end py-3'>$23.25</td>
                                </tr>
                                <tr className='border-t-2'>
                                    <td className='text-[#4D4D4D] py-4'>Total:</td>
                                    <td className='text-end py-3 font-bold'>$23.25</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='w-[250px] h-[50px] bg-[#00B207] flex justify-center items-center my-5 mx-auto rounded-[43px] text-white font-semibold'>
                            <p>Proceed to checkout</p>
                        </div>
                    </div>
                </div>
                {/* //////////////////////////////////// */}
                {/* <table className='w-full'>
                        <thead className=''>
                            <th className='text-base text-start font-medium text-[#808080] pb-4'>Product</th>
                            <th className='text-base text-start font-medium text-[#808080] pb-4'>Quantity</th>
                            <th className='text-base text-start font-medium text-[#808080] pb-4'>Subtotal</th>
                        </thead>
                        <tbody>
                            <tr className='border-t-2'>
                                <td className='py-4 flex items-center'>
                                    <img src="./../../../public/images/cool.png" className='w-[100px] h-[100px]' alt="" />
                                    <p className='text-[#1A1A1A]'>Green Capsicum</p>
                                </td>
                                <td >
                                    <div className='flex items-center justify-between max-w-[150px] p-3 gap-4 rounded-[170px] border-2 border-[#E6E6E6] bg-white'>
                                        <button onClick={() => { if (itemNumber > 0) { setItemNumber((itemNumber) => itemNumber - 1) } }} className='bg-[#E6E6E6] w-9 h-9 rounded-full flex justify-center items-center'><FaMinus /></button>
                                        <p>{itemNumber}</p>
                                        <button onClick={() => setItemNumber((itemNumber) => itemNumber + 1)} className='bg-[#E6E6E6] w-9 h-9 rounded-full flex justify-center items-center'><FaPlus /></button>
                                    </div>
                                </td>
                                <td className='py-4'>
                                    <div className='flex justify-between items-center'>
                                        <p>$520.256</p>
                                        <button className='text-2xl text-[#808080] hover:text-[#C70039]'><ImCross></ImCross></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table> */}
                {/* /////////////////////////////////// */}
            </div >
        </div >
    );
};

export default Cart;