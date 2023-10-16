import React from 'react';
import Header from '../../components/Common/Header/Header';
import { Link, Outlet } from 'react-router-dom';


const DashboardLayout = () => {
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
                    <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                        {/* Sidebar content here */}
                        <li className=' font-semibold'><Link to='/dashboard'>All Products</Link></li>


                        <li className=' font-semibold'><Link to='/dashboard/uploadProduct'>Upload Product</Link></li>
                        <li className=' font-semibold'><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                        {/* <li><Link to='/dashboard/addDoctorop'>Add a new Doctor</Link></li> */}
                        <li className=' font-semibold'><Link to='/dashboard/manageDoctor'>Manage Doctors</Link></li>


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;