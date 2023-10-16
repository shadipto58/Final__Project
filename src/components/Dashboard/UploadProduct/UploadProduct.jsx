import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const UploadProduct = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    // console.log(user.email);

    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = res.json();
            return data;
        }
    })
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    console.log(products);

    const uploadProduct = (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('price', data.price);
        formData.append('phone', data.phone);
        formData.append('category', data.category);
        formData.append('condition', data.condition);
        formData.append('description', data.description);
        formData.append('location', data.location);
        formData.append('image', data.image[0]);
        formData.append('uploaderEmail', user?.email);
        formData.append('uploaderName', user?.displayName);


        fetch('http://localhost:5000/products', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success(`Product added successfully`);
                    reset()
                }
            })
            .catch(error => {
                console.log(error);
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
                                <option>Electronics</option>
                                <option>Mobile</option>
                                <option>Car</option>
                                <option>Bike</option>
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

                        <div className="form-control w-full mt-5">
                            <label className="text-sm text-black font-semibold mb-2.5">Photo</label>
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
            <div>
                <h2>go forv b ujhhdc</h2>
                {
                    products.map(product => <img key={product._id} className='w-[40px] h-[40px] rounded-full' src={`data:image/png;base64,${product.image}`} />)
                }
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default UploadProduct;