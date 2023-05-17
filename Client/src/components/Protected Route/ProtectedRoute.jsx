import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute ({adminAuth, children, redirectTo = '/'}) {

    if(adminAuth.rol === 'admin'){
        return children ? children : <Outlet/>
    }

    return <Navigate to={redirectTo}/>
} 

