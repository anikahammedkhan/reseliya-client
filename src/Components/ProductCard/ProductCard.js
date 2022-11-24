import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { name, resale_price, original_price, image, brand } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="mobile" className='h-[360px]' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='font-semibold text-lg'>Brand : <span className='text-green-600'>{brand}</span></p>
                <p className='font-semibold text-lg'>Original Price : <span className='text-green-500'>{original_price}$</span></p>
                <p className='font-semibold text-lg'>Selling Price : <span className='text-red-400 text-2xl'>{resale_price}$</span></p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary font-bold">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;