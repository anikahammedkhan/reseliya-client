import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SingleProductDetails from '../../Components/SingleProductDetails/SingleProductDetails';
import Main from '../../Layout/Main/Main';
import AllProducts from '../../Pages/AllProducts/AllProducts';
import Blog from '../../Pages/Blog/Blog';
import CategoryProducts from '../../Pages/CategoryProducts/CategoryProducts';
import Error from '../../Pages/Error/Error';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/category/:brand',
                element: <CategoryProducts></CategoryProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.brand}`)
            },
            {
                path: '/product/:id',
                element: <SingleProductDetails></SingleProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])

export default router;

