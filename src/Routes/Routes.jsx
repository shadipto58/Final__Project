import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Cart from '../components/Cart/Cart';
import Shop from '../components/Shop/Shop';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Category from '../components/Category/Category';
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardLayout from '../Layout/DashboardLayout/DashboardLayout';
import UploadProduct from '../components/Dashboard/UploadProduct/UploadProduct';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: async () => {
                //     return fetch('http://localhost:5000/product')
                // }

            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Register></Register>,
            },
            {
                path: '/myshoppingcart',
                element: <Cart></Cart>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/productDetails/:productName',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.productName}`)
            },
            {
                path: '/myshoppingcart/:productName',
                element: <Cart></Cart>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.productName}`)
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/product',
                element: <PrivateRoute><Category></Category></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/uploadProduct',
                element: <UploadProduct></UploadProduct>
            },

        ]
    }
])



export default router;