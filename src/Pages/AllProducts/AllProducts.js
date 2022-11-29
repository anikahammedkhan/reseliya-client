import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://reseliya-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-12'>
            <HelmetProvider>
                <Helmet>
                    <title>All Products</title>
                    <meta name="description" content="All Products" />
                </Helmet>
            </HelmetProvider>
            <h1 className='text-5xl font-bold text-green-500 text-center my-12'>All Available Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
                {
                    products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;