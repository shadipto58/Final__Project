import React, { useContext } from 'react';
import Header from '../../components/Common/Header/Header';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';


const DashboardLayout = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [isAdminLoading, isAdmin] = useAdmin(user?.email);
    //console.log(isAdmin);

    return (
        <div>
            <Header></Header>

            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#F1F5F9] p-14">
                    {/* Page content here */}

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-white text-base-content space-y-5">
                        {/* Sidebar content here */}
                        <li className=' font-semibold'><Link to='/dashboard'>My Products</Link></li>
                        <li className=' font-semibold'><Link to='/dashboard/alluser'>All User</Link></li>
                        <li className=' font-semibold'><Link to='/dashboard/uploadProduct'>Upload Product</Link></li>
                        <li className=' font-semibold'><Link to='/dashboard/myorders'>My Order</Link></li>
                        <li className=' font-semibold'><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;