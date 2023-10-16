import React, { useEffect, useState } from 'react';
import FilterSectionVr from './FilterSection/FilterSectionVr';
import ProductList from './ProductList/ProductList';
import SortVR from './ProductSort/SortVR';


const Shop = () => {





    return (
        <div className='container mx-auto'>
            <div className='flex justify-between '>
                <div className='bg-red-500 w-[20%] py-4 px-2'>
                    <FilterSectionVr></FilterSectionVr>
                </div>
                <div className=' w-[75%] py-4 px-2'>
                    <div className='mb-5'>
                        <SortVR></SortVR>
                    </div>
                    <div>
                        <ProductList></ProductList>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;