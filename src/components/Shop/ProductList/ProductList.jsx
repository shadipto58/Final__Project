import React, { useEffect, useState } from 'react';

import ProductCard from './ProductCard/ProductCard';

const ProductList = () => {


    const [products, setProducts] = useState([]);

    //console.log(products);

    useEffect(() => {
        fetch('https://api.pujakaitem.com/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 sm:p-0 p-4'>

            {
                products.map(product => <ProductCard
                    key={product.id}
                    product={product}
                ></ProductCard>)
            }

        </div>
    );
};

export default ProductList;