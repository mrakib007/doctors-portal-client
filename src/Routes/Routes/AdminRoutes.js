import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Pages/Shared/Lodading/Loading';

const AdminRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email);
    if(loading || isAdminLoading){
        return <Loading className='progress w-56'></Loading>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{from:location}}replace></Navigate> ;
};

export default AdminRoute;