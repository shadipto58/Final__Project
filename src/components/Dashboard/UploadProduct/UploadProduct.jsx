import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const UploadProduct = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    // console.log(user.email);


    // const uploadProduct = (data) => {
    //     console.log(data);
    //     const formData = new FormData();
    //     formData.append('name', data.name);
    //     formData.append('price', data.price);
    //     formData.append('phone', data.phone);
    //     formData.append('category', data.category);
    //     formData.append('condition', data.condition);
    //     formData.append('description', data.description);
    //     formData.append('location', data.location);
    //     formData.append('usingDeuration', data.usingDeuration);
    //     formData.append('image', data.image[0]);
    //     formData.append('uploaderEmail', user?.email);
    //     formData.append('uploaderName', user?.displayName);


    //     fetch('http://localhost:5000/products', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.insertedId) {
    //                 toast.success(`Product added successfully`);
    //                 reset()
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })

    // }

    const uploadProduct = (data) => {
        //console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0]);

        const url = 'https://api.imgbb.com/1/upload?key=6f58f526709e7190405ed3cd1db3f661';

        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                //console.log(imageData);
                if (imageData.success) {

                    const products = {
                        name: data.name,
                        category: data.category,
                        condition: data.condition,
                        location: data.location,
                        phone: data.phone,
                        price: data.price,
                        usingDeuration: data.usingDeuration,
                        image: imageData?.data?.url,
                        uploaderEmail: user?.email,
                        uploaderName: user?.displayName

                    }

                    fetch('http://localhost:5000/products', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(products)
                    })
                        .then(res => res.json())
                        .then(result => {
                            //console.log(result);
                            toast.success(`product added successfully`)
                            reset();
                        })
                }
            })
    }




    return (
        <div>
            <h2 className='text-2xl mb-5'>Upload products</h2>
            <div className=''>
                <div className='w-[540px] p-12 rounded-2xl bg-white'>
                    <form onSubmit={handleSubmit(uploadProduct)} className='' >
                        <div className="form-control w-full">
                            <label className="text-sm text-black font-semibold mb-2.5">Product Name</label>
                            <input {...register("name", { required: "Please enter product name" })} type="text" placeholder='Enter Product Name' className="input input-bordered w-full" />
                            {errors.name && <label className='text-red-500'>{errors.name?.message}</label>}
                        </div>

                        <div className="form-control w-full mt-4">
                            <label className="text-sm text-black font-semibold mb-2.5">Product Price</label>
                            <input {...register("price", { required: "Please enter product price" })} type="text" placeholder='Enter Product Price' className="input input-bordered w-full" />
                            {errors.price && <label className='text-red-500'>{errors.price?.message}</label>}
                        </div>

                        <div className="form-control w-full mt-4">
                            <label className="text-sm text-black font-semibold mb-2.5">Enter Your Phone</label>
                            <input {...register("phone", { required: "Please enter your phone" })} type="number" placeholder='Enter Your phone' className="input input-bordered w-full" />
                            {errors.phone && <label className='text-red-500'>{errors.phone?.message}</label>}
                        </div>

                        <div className="form-control w-full mt-4">
                            <label className="text-sm text-black font-semibold mb-2.5">Enter Your Location</label>
                            <input {...register("location", { required: "Please enter your location" })} type="text" placeholder='Enter your location' className="input input-bordered w-full" />
                            {errors.location && <label className='text-red-500'>{errors.location?.message}</label>}
                        </div>

                        <div className="form-control w-full mt-4">
                            <label className="text-sm text-black font-semibold mb-2.5">Product Category</label>
                            <select {...register('category')} className="select select-bordered">
                                <option>electronics</option>
                                <option>mobile</option>
                                <option>car</option>
                                <option>bike</option>
                            </select>
                        </div>
                        <div className="form-control w-full mt-4">
                            <label className="text-sm text-black font-semibold mb-2.5">Condition</label>
                            <select {...register('condition')} className="select select-bordered">
                                <option>Good</option>
                                <option>Fair</option>
                                <option>Excellent</option>
                            </select>
                        </div>

                        <div className="form-control w-full mt-4">
                            <label className="text-sm text-black font-semibold mb-2.5">Time Of Use</label>
                            <select {...register('usingDeuration')} className="select select-bordered">
                                <option>1 Month</option>
                                <option>2 Month</option>
                                <option>4 Month</option>
                                <option>8 Month</option>
                                <option>1 Year</option>
                                <option>2 Year</option>
                            </select>
                        </div>

                        <div className="form-control w-full mt-5">
                            <label className="text-sm text-black font-semibold mb-2.5">Products Photo</label>
                            <input type="file" {...register("image", { required: "Please enter your image" })} className="file-input file-input-bordered w-full" />
                            {errors.image && <label className='text-red-500'>{errors.image?.message}</label>}
                        </div>
                        <div className='form-control w-full mt-4'>
                            <label className="text-sm text-black font-semibold mb-2.5">Product Description</label>
                            <textarea {...register("description", { required: "Please enter product description" })} className="textarea textarea-bordered" placeholder="Product Description"></textarea>
                            {errors.description && <label className='text-red-500'>{errors.description?.message}</label>}
                        </div>
                        <div className="form-control w-full mt-5">
                            <input type="submit" value='Add' className="input input-bordered w-full bg-[#FF7A00] text-white cursor-pointer" />
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default UploadProduct;