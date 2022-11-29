import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [isBuyer, setIsBuyer] = useState(false);
    const email = user?.email;
    useEffect(() => {
        fetch("https://reseliya-server.vercel.app/users")
            .then((res) => res.json())
            .then((data) => {
                const user = data.find((user) => user.email === email);
                if (user) {
                    setIsAdmin(user.role === "Admin");
                    setIsSeller(user.role === "Seller");
                    setIsBuyer(user.role === "Buyer");
                }
            });
    }, [email]);


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-60 bg-green-100 text-base-content">
                        {
                            isBuyer && <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/dashboard/my-orders">My Orders</Link></li>
                        }
                        {
                            isSeller && <>
                                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/dashboard/add-product">Add A Product</Link></li>
                                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/dashboard/my-products">My Products</Link></li>
                                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/dashboard/my-buyers">My Buyers</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/dashboard/all-sellers">All Sellers</Link></li>
                                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/dashboard/all-buyers">All Buyers</Link></li>
                                <li className='font-semibold text-lg hover:bg-amber-300 rounded-xl mx-1'><Link to="/dashboard/reported-items">Reported Items</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;