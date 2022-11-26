import React, { useContext, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then((result) => {
                setError('');
                const user = result.user;
                toast.success(`Welcome ${user.displayName}`);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                toast.success(`Welcome ${user.displayName}`);
            })
            .catch((error) => {
                setError(error.message);
            });
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
                    <title>Login</title>
                </Helmet>
            </HelmetProvider>
            <div className="w-full max-w-md p-4 rounded-md shadow-2xl sm:p-8 mx-auto">
                <h2 className="mb-3 text-4xl font-semibold text-center">Login to your account</h2>
                <p className="text-sm text-center">Don't have account?
                    <Link to="/register" className="focus:underline hover:underline text-green-500"> Register here</Link>
                </p>
                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleLogin} type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-400 hover:bg-green-200">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" /></svg>
                        <p>Login with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <div className="w-full text-gray-700">
                        <p className="px-3 text-center text-gray-400">OR</p>
                        <div className="w-full text-gray-400">
                        </div>
                        <form onSubmit={handleEmailLogin} className="space-y-8">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="Your Email " className="w-full px-3 py-2 border rounded-md border-gray-700 focus:border-sky-600" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="password" className="text-sm">Password</label>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 border rounded-md border-gray-700 focus:border-sky-600" />
                                </div>
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <button type="submit" className="w-full px-8 py-3 font-bold rounded-md bg-green-600 text-xl text-white hover:bg-green-700">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;