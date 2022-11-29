import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const BuyerRoute = ({ children }) => {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const email = user?.email;
    const [role, setRole] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => {
                setRole(data);
                setLoading(false);
            })
    }, [email])

    if (loading) {
        return <div className='w-full h-[600px] flex items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-600 mx-auto"></div>
        </div>
    }
    if (user && role.role === 'Buyer') {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace />;
};

export default BuyerRoute;