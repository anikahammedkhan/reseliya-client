import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/UserContext';

const MyBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    const { user } = useContext(AuthContext);
    const sellerEmail = user?.email;

    fetch(`https://reseliya-server.vercel.app/mybuyer/${sellerEmail}`)
        .then(res => res.json())
        .then(data => setBuyers(data))
    // console.log(buyers);



    return (
        <div>
            <h1 className='text-5xl font-bold text-green-500 text-center my-12'>My Buyers</h1>
            <div className="overflow-x-auto w-full px-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Buyers Name</th>
                            <th>Buyers Email</th>
                            <th>Items Purchased</th>
                            <th>Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map(buyer => (
                                <tr key={buyer._id}>
                                    <td>{buyer.buyerName}</td>
                                    <td>{buyer.buyerEmail}</td>
                                    <td>{buyer.productName}</td>
                                    <td>{buyer.productPrice}$</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuyers;