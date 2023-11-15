import React, { useEffect, useState } from 'react';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Product from './Product/Product';
import { useLoaderData } from 'react-router-dom';

import Product from '../../Product/Product';
// import eggplant from '../../../../assets/images/eggplant.jpg';
// import image from '../../../../assets/images/apple.png';

const Popular = () => {

    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch('https://final-server-chi.vercel.app/product')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    // const products = useLoaderData();
    // console.log(products);
    // console.log("Data is here")

    return (
        <div className='my-12'>
            <div className='popular-wrapper container mx-auto'>
                <div className='flex justify-between items-center mb-8 sm:p-0 p-4'>
                    <h2 className='text-[32px] text-[#1A1A1A] font-semibold'>Popular Products <span></span></h2>
                    <p className='text-[#00B207] font-medium'>View All <FontAwesomeIcon icon={faArrowRight} /></p>
                </div>
                <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 sm:p-0 p-4'>

                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Popular;