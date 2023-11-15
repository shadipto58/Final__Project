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
import Dashboard from '../components/Dashboard/Dashboard';
import DashboardLayout from '../Layout/DashboardLayout/DashboardLayout';
import UploadProduct from '../components/Dashboard/UploadProduct/UploadProduct';
import Product from '../components/Product/Product';
import AllUser from '../components/Dashboard/AllUser/AllUser';
import AdminRoute from './AdminRoute/AdminRoute';
import Payment from '../components/Dashboard/Payment/Payment';
import MyOrder from '../components/Dashboard/MyOrder/MyOrder';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: async () => {
                //     return fetch('https://final-server-chi.vercel.app/product')
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
                loader: ({ params }) => fetch(`https://final-server-chi.vercel.app/product/${params.productName}`)
            },
            {
                path: '/myshoppingcart/:productName',
                element: <Cart></Cart>,
                loader: ({ params }) => fetch(`https://final-server-chi.vercel.app/product/${params.productName}`)
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/products/:category',
                element: <PrivateRoute><Product></Product></PrivateRoute>,
                loader: ({ params }) => fetch(`https://final-server-chi.vercel.app/products/${params.category}`)
            },
            // {
            //     path: '/products/:name',
            //     element: <PrivateRoute><Product></Product></PrivateRoute>,
            //     loader: ({ params }) => fetch(`https://final-server-chi.vercel.app/products/${params.name}`)
            // }
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
            {
                path: '/dashboard/alluser',
                element: <AllUser></AllUser>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://final-server-chi.vercel.app/bookings/${params.id}`)
            },

        ]
    }
])



export default router;