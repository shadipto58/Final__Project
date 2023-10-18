import React from 'react';

import image from '../../../../assets/images/image-1.png';
import carLogo from '../../../../assets/images/bike-1.png';
import { Link } from 'react-router-dom';

const CategorieCard = ({ category }) => {
    const { categoryName, title } = category;
    return (

        <div className=''>
            <Link to={`/products/${categoryName}`}>
                <div className='border-2 hover:border-[#FF7A00] rounded-lg hover:cursor-pointer sm:w-full w-[300px] mx-auto h-full p-5 flex flex-col gap-5 justify-between'>
                    <img src={category.image} className='mx-auto' alt="" />
                    <p className='text-lg text-center text-[#1A1A1A] font-medium'>{title}</p>
                </div>
            </Link>
        </div>

    );
};

export default CategorieCard;