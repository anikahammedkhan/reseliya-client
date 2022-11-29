import React, { useState } from 'react';

const AllSellers = () => {
    const [sellers, setSellers] = useState([]);

    fetch('http://localhost:5000/users/Seller')
        .then(res => res.json())
        .then(data => setSellers(data))
    return (
        <div>
            <h1 className='text-5xl font-bold text-green-500 text-center my-12'>All Sellers</h1>
            <div className="overflow-x-auto w-full px-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Seller Role</th>
                            <th>Seller Uid</th>
                            <th>Delete Seller</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map(seller => (
                                <tr key={seller._id}>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                    <td>{seller.uId}$</td>
                                    <td><button className='bg-red-500 text-white px-3 py-1 rounded'>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;