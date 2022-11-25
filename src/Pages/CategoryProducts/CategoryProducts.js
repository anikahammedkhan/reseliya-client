import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const CategoryProducts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const products = useLoaderData();
    const brand = products[0].brand;

    return (
        <div className='my-12'>
            <HelmetProvider>
                <Helmet>
                    <title>{brand}</title>
                    <meta name="description" content="Brands" />
                </Helmet>
            </HelmetProvider>
            <h1 className='text-5xl font-bold text-green-500 text-center my-12'>Available Products For <span className='text-amber-500'>{brand}</span> </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
                {
                    products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;