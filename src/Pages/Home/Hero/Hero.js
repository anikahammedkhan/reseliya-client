import React from 'react';

const Hero = () => {
    return (
        <div className=''>
            <div className="carousel w-full overflow-hidden m-12">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-1/2 flex justify-center'>
                                <img src="https://img.freepik.com/free-vector/realistic-phones-different-views_52683-28436.jpg?w=1380&t=st=1669270646~exp=1669271246~hmac=4ad020c42a7c17c45310bf1de1aed3903d5126d8720c2d816f4897852aa52954" className=" rounded-lg shadow-2xl" alt='' />
                            </div>
                            <div className='w-1/2'>
                                <h1 className="text-5xl font-bold text-amber-500"><span className='text-green-500'>Reseliya</span><br /> Resell or Buy Used Mobile</h1>
                                <p className="py-6 font-semibold text-slate-800 text-xl">
                                    We are the most trusted and leading online marketplace for buying and selling used mobile phones in Bangladesh.
                                </p>
                                <button className="btn btn-accent font-bold text-white">All Category</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-1/2 flex justify-center'>
                                <img src="https://img.freepik.com/free-vector/realistic-smartphone-different-views_23-2148350922.jpg?w=1380&t=st=1669270754~exp=1669271354~hmac=b458995a352feec4c9f84f2f3c997d0af820c7944dde94585e42f6bf213f21c1" alt='' className='rounded-md shadow-xl' />
                            </div>
                            <div className='w-1/2'>
                                <h1 className="text-5xl font-bold text-amber-500"><span className='text-green-500'>Reseliya</span><br /> Resell or Buy Used Mobile</h1>
                                <p className="py-6 font-semibold text-slate-800 text-xl">
                                    We are the most trusted and leading online marketplace for buying and selling used mobile phones in Bangladesh.
                                </p>
                                <button className="btn btn-accent font-bold text-white">All Category</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-1/2 flex justify-center'>
                                <img src="https://www.renderhub.com/rever-art/samsung-galaxy-a23-blue/samsung-galaxy-a23-blue-01.jpg" alt='' />
                            </div>
                            <div className='w-1/2'>
                                <h1 className="text-5xl font-bold text-amber-500"><span className='text-green-500'>Reseliya</span><br /> Resell or Buy Used Mobile</h1>
                                <p className="py-6 font-semibold text-slate-800 text-xl">
                                    We are the most trusted and leading online marketplace for buying and selling used mobile phones in Bangladesh.
                                </p>
                                <button className="btn btn-accent font-bold text-white">All Category</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className='w-1/2 flex justify-center'>
                                <img src="https://img.freepik.com/free-vector/face-back-cover-smartphone-various-views_23-2148337943.jpg?w=1380&t=st=1669270654~exp=1669271254~hmac=dccae79ccdc510cffc33b96e612bc99ed5ab515d7a19d3e5d0c9068c1cce3eea" className=" rounded-lg shadow-2xl" alt='' />
                            </div>
                            <div className='w-1/2'>
                                <h1 className="text-5xl font-bold text-amber-500"><span className='text-green-500'>Reseliya</span><br /> Resell or Buy Used Mobile</h1>
                                <p className="py-6 font-semibold text-slate-800 text-xl">
                                    We are the most trusted and leading online marketplace for buying and selling used mobile phones in Bangladesh.
                                </p>
                                <button className="btn btn-accent font-bold text-white">All Category</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Hero;