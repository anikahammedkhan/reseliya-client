import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard/ProductCard';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-12'>
            <h1 className='text-5xl font-bold text-green-500 text-center my-12'>All Available Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
                {
                    products.map(product => <ProductCard product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllProducts;