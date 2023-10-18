import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {

    const [isAdmin, setIsAdmin] = useState(true);
    const [isAdminLoading, setIsAdminLoading] = useState(false);


    useEffect(() => {
        if (email) {
            console.log(email);
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    setIsAdmin(data?.isAdmin)
                    // setIsAdminLoading(false)
                })
        }
    }, [email])

    // console.log(isAdmin);
    // console.log(isAdminLoading);

    return [isAdmin, isAdminLoading]
};

export default useAdmin;