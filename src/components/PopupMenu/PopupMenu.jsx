import React, { useContext } from 'react';
import './PopupMenu.css'
import { AuthContext } from '../../context/AuthProvider';

const PopupMenu = ({ closeModal }) => {
    const { user, logOut } = useContext(AuthContext);
    //console.log(closeModal);


    const handleLogOut = () => {
        closeModal()
        logOut()
    }
    return (
        <div>
            <div className=''></div>
            <div className='popup-wrapper'>
                <div className='profile-wrapper'>
                    <div className='profile-pic'><img src={user?.photoURL} alt="" /></div>
                    <div className='profile-info'>
                        <h2>{user?.displayName}</h2>
                        <p></p>
                    </div>
                </div>
                <div className='profile-links'>
                    <a href="#">My order</a>
                    <a href="#">Profile</a>
                    <a href="#" onClick={handleLogOut}>Logout</a>
                    <a href="#" onClick={() => closeModal()}>Close</a>
                </div>
            </div>
        </div>
    );
};

export default PopupMenu;