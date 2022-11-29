import React, { useState } from 'react';

const Allbuyers = () => {

    const [buyers, setBuyers] = useState([]);

    fetch('http://localhost:5000/users/Buyer')
        .then(res => res.json())
        .then(data => setBuyers(data))
    return (
        <div>
            <h1 className='text-5xl font-bold text-green-500 text-center my-12'>All Buyers</h1>
            <div className="overflow-x-auto w-full px-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Seller Role</th>
                            <th>Seller Uid</th>
                            <th>Delete/Verify Seller</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map(seller => (
                                <tr key={seller._id}>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                    <td>{seller.uId}$</td>
                                    <td>
                                        <button className='bg-red-500 text-white px-3 py-1 rounded'>Delete</button>
                                        <button className='bg-green-500 text-white px-3 py-1 rounded mx-2'>Verify</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allbuyers;