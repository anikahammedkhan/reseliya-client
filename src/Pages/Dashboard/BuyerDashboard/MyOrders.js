import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const buyerEmail = user?.email;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${buyerEmail}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [buyerEmail, orders])

    const handleDeleteOrder = (id, oId) => {

        fetch(`http://localhost:5000/product/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: "available" })
        })
            .then(res => res.json())
            .then(data => {
                fetch(`http://localhost:5000/orders/${oId}`, {
                    method: "DELETE",
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            toast.success("Order Deleted Successfully");
                            const remainingOrders = orders.filter(order => order._id !== id);
                            setOrders(remainingOrders);
                        }
                    })
            })
    }



    return (
        <div>
            <h1 className='text-5xl font-bold text-green-500 text-center my-12'>My Orders</h1>
            <div className="overflow-x-auto w-full px-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Reselling Price</th>
                            <th>Seller Name</th>
                            <th>Delete Order</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map(order => (<tr key={order._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={order?.productImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{order?.productName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {order?.productPrice}$
                                </td>
                                <td>{order?.sellerName}</td>
                                <td>
                                    <button onClick={() => handleDeleteOrder(order?.productId, order?._id)} className='btn btn-sm btn-error'>Delete Order</button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${order?._id}`}><button className='btn btn-success btn-sm'>Pay Now</button></Link>
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

export default MyOrders;