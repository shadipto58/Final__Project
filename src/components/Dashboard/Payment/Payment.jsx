import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {

    const product = useLoaderData();

    const stripePromise = loadStripe('pk_test_51OCHE2SI11d9OCz06gl7p6tQapdjmrMLgJU0g4JUKorWszk5eur8FW3RNgZFN47M0ZMPwFJisUWj6DbjJP7spn7a00x3iwyX9k');


    return (
        <div>
            <h2 className='text-2xl mb-5'>Please Do Your Payment</h2>
            <h2>Pay <span className='font-semibold'>${product.productPrice}</span> For Your <span className='font-semibold'>${product.productName}</span> </h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        product={product}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;