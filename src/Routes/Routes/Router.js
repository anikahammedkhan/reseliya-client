import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import AllProducts from '../../Pages/AllProducts/AllProducts';
import CategoryProducts from '../../Pages/CategoryProducts/CategoryProducts';
import Home from '../../Pages/Home/Home/Home';

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
            }
        ]
    }
])

export default router;

