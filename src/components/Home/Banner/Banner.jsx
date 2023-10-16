import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import banner from '../../../assets/images/car-3.png'

const Banner = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className='flex flex-col lg:flex-row items-center gap-5 sm:px-0 px-4'>
                <div className='lg:w-1/2 w-full'>
                    <img src={banner} alt="" />
                </div>
                <div className='lg:w-1/2 w-full sm:px-5'>
                    <h2 className='text-[#FF7A00] text-3xl mb-[24px]'>Sed ut perspiciatis unde omnis</h2>
                    <p className='text-2xl mb-[24px]'>Nemo enim ipsam voluptatem quia voluptas sit rnatur aut odit aut fugit, sed quia consequuntur </p>
                    <p className='text-lg'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.  qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;