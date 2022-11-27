import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';

const SingleProductDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const product = useLoaderData();
    const { name, brand, condition, image, location
        , original_price, resale_price, seller_name
        , description, seller_phone, time, years_used
    } = product;
    return (
        <div className="hero my-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="rounded-lg shadow-2xl" alt='mobile' />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">{description}</p>
                    <div className="grid grid-cols-2 justify-around">
                        <div className="flex flex-col text-2xl text-green-500">
                            <p className="font-bold">Brand</p>
                            <p className="font-bold">Condition</p>
                            <p className="font-bold">Location</p>
                            <p className="font-bold">Original Price</p>
                            <p className="font-bold">Resale Price</p>
                            <p className="font-bold">Seller Name</p>
                            <p className="font-bold">Seller Phone</p>
                            <p className="font-bold">Post Time</p>
                            <p className="font-bold">Years Used</p>
                        </div>
                        <div className="flex flex-col text-2xl text-amber-500 font-semibold">
                            <p>{brand}</p>
                            <p>{condition}</p>
                            <p>{location}</p>
                            <p>{original_price}$</p>
                            <p>{resale_price}$</p>
                            <p>{seller_name}</p>
                            <p>{seller_phone}</p>
                            <p>{time}</p>
                            <p>{years_used}</p>
                        </div>
                    </div>
                    <div className='flex justify-evenly my-8'>
                        <Link className='btn btn-warning font-bold text-white'>Report To Admin</Link>
                        <label htmlFor="booking-modal" className="btn btn-success font-bold text-white">Book Now</label>
                        <BookingModal product={product}></BookingModal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;