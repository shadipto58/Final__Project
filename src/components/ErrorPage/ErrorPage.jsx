import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h2 className="text-5xl font-bold">404</h2>
                    <h2 className="text-5xl font-bold">Page Not Found</h2>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link><button className="btn btn-primary">Go Back Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;