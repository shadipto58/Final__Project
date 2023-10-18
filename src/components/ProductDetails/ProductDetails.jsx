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

        </div>
    );
};

export default ProductDetails;