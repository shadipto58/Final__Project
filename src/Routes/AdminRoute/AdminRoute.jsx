import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    //console.log(loading);
    const location = useLocation();
    const [isAdminLoading, isAdmin] = useAdmin(user?.email);
    console.log(isAdmin);
    console.log(isAdminLoading);

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;