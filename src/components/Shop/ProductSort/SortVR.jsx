import React from 'react';

const SortVR = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <p className='text-[#808080] me-3'>Sort by:</p>
                <select className="select select-bordered w-[200px]">
                    <option disabled selected>Who shot first?</option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                </select>
            </div>
            <div>
                <p className='font-bold'>58<span className='text-[#808080] font-normal ms-2'>Results Found</span></p>
            </div>
        </div>
    );
};

export default SortVR;