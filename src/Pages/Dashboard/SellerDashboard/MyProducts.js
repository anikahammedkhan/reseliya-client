import React, { useContext, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthContext } from '../../../Context/UserContext';
import SingleProduct from './SingleProduct/SingleProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products/seller/${email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [email])
    return (
        <div className='my-12'>
            <HelmetProvider>
                <Helmet>
                    <title>Seller-My Products</title>
                    <meta name="description" content="my-products" />
                </Helmet>
            </HelmetProvider>
            <h1 className='text-4xl font-bold text-green-500 text-center my-12'>My Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6'>
                {
                    products.map(product => <SingleProduct product={product} key={product._id}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default MyProducts;