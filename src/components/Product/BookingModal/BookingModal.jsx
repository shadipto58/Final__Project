import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ bookingData }) => {

    const { name, price } = bookingData


    const { user, loading } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const phone = form.phone.value;
        const location = form.location.value;

        const bookings = {
            name: user.displayName,
            email: user.email,
            productName: name,
            productPrice: price,
            phone,
            location
        }
        //console.log(bookings);

        fetch('https://final-server-chi.vercel.app/bookings', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookings)

        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.insertedId) {
                    toast.success(`Booking Confirm`);
                    form.phone.value = '';
                    form.location.value = '';
                }

            })
            .catch(error => {
                console.log(error);
            })




    }



    return (
        <>
            <dialog id="booking__modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h2 className='text-2xl font-semibold text-[#FF7A00] text-center border-b-2 pb-4'>Let's Meet Togather</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full mt-4">
                            <label className="mb-4"><span className='font-semibold text-[#FF7A00]'>Your Name :</span> {user.displayName}</label>
                            <label className="mb-4"><span className='font-semibold text-[#FF7A00]'>Your Email :</span> {user.email}</label>
                            <label className="mb-4"><span className='font-semibold text-[#FF7A00]'>Product Name :</span> {name}</label>
                            <label className="mb-4"><span className='font-semibold text-[#FF7A00]'>Product Price :</span> {price}</label>

                        </div>
                        <div className="form-control w-full mt-4">
                            <label className="mb-4 text-[#FF7A00] font-semibold">Your Phone</label>
                            <input name='phone' type="number" placeholder='Enter Your Phone' required className="input input-bordered" />
                        </div>
                        <div className="form-control w-full mt-4">
                            <label className="mb-4 text-[#FF7A00] font-semibold">Location</label>
                            <input name='location' type="text" placeholder='Enter Meeting Location' required className="input input-bordered" />
                        </div>

                        <input method="dialog" type='submit' className='btn bg-[#FF7A00] hover:bg-[#FF7A00] text-white mt-5 w-full form-control ' value='submit' />
                    </form>
                    <div className="modal-action block">
                        <form method="dialog">
                            <button className="btn bg-[#FF7A00] hover:bg-[#FF7A00] text-white w-full">Close</button>
                        </form>
                    </div>


                </div>
            </dialog>

        </>

    );
};

export default BookingModal;