import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SingleProductDetails from '../../Components/SingleProductDetails/SingleProductDetails';
import DashboardLayout from '../../Layout/Dashboard/DashboardLayout';
import Main from '../../Layout/Main/Main';
import AllProducts from '../../Pages/AllProducts/AllProducts';
import Blog from '../../Pages/Blog/Blog';
import CategoryProducts from '../../Pages/CategoryProducts/CategoryProducts';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Error from '../../Pages/Error/Error';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import AddProduct from '../../Pages/Dashboard/SellerDashboard/AddProduct';
import MyBuyers from '../../Pages/Dashboard/SellerDashboard/MyBuyers';
import MyProducts from '../../Pages/Dashboard/SellerDashboard/MyProducts';
import MyOrders from '../../Pages/Dashboard/BuyerDashboard/MyOrders';
import Payment from '../../Pages/Dashboard/Payment/Payment';

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
                path: "/register",
                element: <Register></Register>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/my-products',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/my-buyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/my-orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/order/${params.id}`)
            }
        ]
    }
])

export default router;

