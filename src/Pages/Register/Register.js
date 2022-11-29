import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Register = () => {
    const { auth, createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleRegister = (e) => {
        setError('');
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        createUser(email, password)
            .then((result) => {
                setError('');
                form.reset();
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        const user = auth.currentUser;
                        saveUser(name, email, role, user.uid);
                        toast.success('Registration Successful');
                    })
                    .catch((error) => {
                        setError(error.message);
                        toast.error(error.message);
                    });
            })
            .catch((error) => {
                setError(error.message);
                toast.error(error.message);
            });
    }
    const saveUser = (name, email, role, uId) => {
        fetch('https://reseliya-server.vercel.app/users', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, role, uId })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('User Added Successfully');
                    navigate('/');
                }
            })
    }

    // if (loading) {
    //     return (
    //         <div className='w-full h-[600px] flex items-center'>
    //             <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-600 mx-auto"></div>
    //         </div>
    //     )
    // }

    return (
        <div className='my-12'>
            <HelmetProvider>
                <Helmet>
                    <title>Register</title>
                </Helmet>
            </HelmetProvider>
            <div className="w-full max-w-md p-4 rounded-md shadow-2xl sm:p-8 mx-auto">
                <h1 className="mb-3 text-4xl font-semibold text-center">Register for an account</h1>
                <h2 className="text-sm text-center">Already have an account?
                    <Link to="/login" className="focus:underline hover:underline text-green-500"> Login here</Link>
                </h2>
                <div className="flex items-center w-full my-4">
                    <div className="w-full">
                        <form onSubmit={handleRegister} className="space-y-8">
                            <div className='flex justify-center items-center gap-3'>
                                <p className='text-lg text-green-500 font-semibold'>Account Type :</p>
                                <div className='flex gap-4'>
                                    <p>Buyer</p>
                                    <input type="radio" name="role" className="radio radio-success" defaultChecked value="Buyer" />
                                    <input type="radio" name="role" className="radio radio-success" value="Seller" />
                                    <p>Seller</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm">Your Name</label>
                                    <input type="text" name="name" id="name" placeholder="Your Name here " className="w-full px-3 py-2 border rounded-md border-gray-700 focus:border-sky-600" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="Your Email " className="w-full px-3 py-2 border rounded-md border-gray-700 focus:border-sky-600" required />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="password" className="text-sm">Password</label>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 border rounded-md border-gray-700 focus:border-sky-600" required />
                                </div>
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <button type="submit" className="w-full px-8 py-3 font-bold rounded-md bg-green-600 hover:bg-green-700 text-white text-xl">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;