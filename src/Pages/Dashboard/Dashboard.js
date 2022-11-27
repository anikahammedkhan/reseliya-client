import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthContext } from '../../Context/UserContext';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Dashboard</title>
                    <meta name="description" content="my-products" />
                </Helmet>
            </HelmetProvider>
            <h1 className='text-5xl font-bold text-green-500 text-center my-12'>Welcome to Dashboard <br /> <span className='text-4xl text-amber-500'>{user?.displayName}</span></h1>
        </div>
    );
};

export default Dashboard;