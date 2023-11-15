import { useQuery } from '@tanstack/react-query';
import { tr } from 'date-fns/locale';
import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = () => {

    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://final-server-chi.vercel.app/bookings');
            const data = res.json();
            return data;
        }
    })
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    //console.log(products);

    return (
        <div>
            <h2 className='text-2xl mb-5'>My Orders</h2>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Payment status
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map(product =>
                                <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {product.productName}
                                    </th>
                                    <td className="px-6 py-4">
                                        {product.productPrice}
                                    </td>

                                    <td className="px-6 py-4">
                                        {
                                            product.productPrice && !product.paid &&
                                            <Link to={`/dashboard/payment/${product._id}`} className="font-medium text-white dark:text-blue-500 px-5 py-2 rounded-xl bg-black">Pay</Link>
                                        }
                                        {
                                            product.productPrice && product.paid &&
                                            <span className='font-semibold'>Paid</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrder;