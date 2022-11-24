import React, { useEffect, useState } from 'react';

const CategoryMenu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div className='my-12'>
            <div>
                <h1 className='text-5xl font-bold text-green-500 text-center'>All Used Mobile Categories</h1>
            </div>
            <div className="grid grid-cols-6 gap-4 my-8">
                {
                    categories.map(category => <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={category.catImg} alt="Mobile" className='bg-base-100 w-[160px] h-[80px]' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{category.categoryName}</h2>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryMenu;