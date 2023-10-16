import React from 'react';
import CategorieCard from './CategorieCard/CategorieCard';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import carLogo from '../../../assets/images/car-1.png';
import bikeLogo from '../../../assets/images/bike-1.png';


const Categorie = () => {
    const categorys = [
        {
            id: 1,
            categoryName: 'Electronics',
            image: 'https://i.ibb.co/q1MMTxm/tv-2110505-1280.png'
        },
        {
            id: 2,
            categoryName: 'Mobile',
            image: 'https://i.ibb.co/3ryL1SP/phone-icon.jpg'
        },
        {
            id: 3,
            categoryName: 'Bike',
            image: 'https://i.ibb.co/Wx4y2m2/bike-1.png'
        },
        {
            id: 4,
            categoryName: 'Car',
            image: 'https://i.ibb.co/FxWzNMd/ford-mustang-155132-1920.png'
        },
    ]


    return (
        <div className='my-12'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center mb-8 sm:p-0 p-4'>
                    <h2 className='sm:text-[32px] text-[22px] text-[#1A1A1A] font-semibold sm:max-w-none max-w-[200px]'>Browse items by category <span></span></h2>
                    <p className='text-[#FF7A00] font-medium'>View All <FontAwesomeIcon icon={faArrowRight} /></p>
                </div>
                {/* grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 sm:p-0 p-4 */}
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 sm:p-0 p-4'>

                    {
                        categorys.map(category => <CategorieCard
                            key={category.id}
                            category={category}
                        >

                        </CategorieCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Categorie;