import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const FewProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://reseliya-server.vercel.app/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const fewProducts = products.slice(0, 6);
    return (
        <div>
            <div>
                <h1 className='text-5xl text-green-500 font-bold text-center'>All Products</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                {
                    fewProducts.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                }
            </div>
            <div className='text-center my-12'>
                <Link to='/products' className='btn btn-success text-white font-bold'>See More</Link>
            </div>
        </div>
    );
};

export default FewProducts;