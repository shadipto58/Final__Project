import React, { useState } from 'react';
// import image from '../../../../assets/images/apple.png';
import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
// import eggplant from '../../../../assets/images/eggplant.jpg'

const PopularCard = ({ product }) => {

    const [productCart, setProductCart] = useState({});
    const [productDtails, setProductDetails] = useState({});


    //console.log(productCart);
    //console.log(productDtails);
    //console.log(productCart);
    const { _id, name, img, price } = product;
    // console.log(product);

    // HERE WE GET PRODUCT INFO FOR CART PAGE
    const handleProductCart = (event) => {
        // console.log(event.target);
        console.log('cart clicked');
        const productInfo = {
            _id,
            name,
            price,
            img
        }
        setProductCart(productInfo);

    }

    // HERE WE GET PRODUCT DETAILS FOR PRODUCT DETAILS PAGE
    const handleProductDetails = () => {
        console.log('Details clicked');
        const productDetail = {
            _id,
            name,
            price,
            img
        }
        setProductDetails(productDetail);
    }



    return (

        <div onClick={handleProductDetails} className='flex flex-col justify-between group/edit border-2 hover:border-[#2C742F] rounded-lg group/item transition-all relative'>
            <div className='w-14 h-14 bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white flex justify-center items-center rounded-full text-4xl transition-all invisible group-hover/edit:visible absolute top-4 right-4'>
                <FaRegHeart />
            </div>
            <div className='max-w-[250] max-h-[250]'>
                <Link to={`/productDetails/${name}`}><img src={img} className='my-4 mx-auto max-w-full max-h-[200px]' alt="" /></Link>
            </div>
            <div className='flex justify-between p-3 items-center'>
                <div>
                    <Link to={`/productDetails/${name}`}><h2 className='text-[#4D4D4D] group-hover/item:text-[#2C742F] group-hover/item:font-semibold'>{name}</h2></Link>
                    <p className='text-[##1A1A1A] font-medium'>$52.256</p>
                    <div className='flex items-center'>
                        <AiFillStar className='text-[#FF8A00] text-lg'></AiFillStar>
                        <AiFillStar className='text-[#FF8A00] text-lg'></AiFillStar>
                        <AiFillStar className='text-[#FF8A00] text-lg'></AiFillStar>
                        <AiFillStar className='text-[#FF8A00] text-lg'></AiFillStar>
                        <AiFillStar className='text-[#CCCCCC] text-lg'></AiFillStar>
                    </div>
                </div>
                <Link to={`/myshoppingcart/${name}`}>
                    <div className='w-14 h-14 bg-[#F2F2F2] hover:bg-[#00B207] hover:text-white flex justify-center items-center rounded-full text-4xl transition-all'>
                        <HiOutlineShoppingCart />
                    </div>
                </Link>
            </div>
        </div>

    );
};

export default PopularCard;