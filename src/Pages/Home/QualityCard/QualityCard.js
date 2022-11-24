import React from 'react';
import { FcLike } from 'react-icons/fc';

const QualityCard = () => {
    return (
        <div className='my-12'>
            <div className='text-center'>
                <div className='flex justify-center gap-3 items-center text-2xl'>
                    <FcLike />
                    <h3 className='font-bold'>Why Us</h3>
                </div>
                <h1 className='text-5xl font-bold text-green-500'>Why People Choose Us</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 px-10 my-6'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure className="px-10 pt-10">
                            <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service6.png" alt="box" />
                        </figure>
                        <p className='text-lg font-bold text-center'>Fast & Secure <br /> Delivery</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure className="px-10 pt-10">
                            <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service7.png" alt="box" />
                        </figure>
                        <p className='text-lg font-bold text-center'>100% Guarantee <br /> On Product</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure className="px-10 pt-10">
                            <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service8.png" alt="box" />
                        </figure>
                        <p className='text-lg font-bold text-center'>24 Hour Return <br /> Policy</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure className="px-10 pt-10">
                            <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service9.png" alt="box" />
                        </figure>
                        <p className='text-lg font-bold text-center'>24 Hour Return <br /> Policy</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <figure className="px-10 pt-10">
                            <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service10.png" alt="box" />
                        </figure>
                        <p className='text-lg font-bold text-center'>Next Level Pro <br /> Quality</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QualityCard;