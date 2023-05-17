import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes=({ adminAuth, children, redirect="/"})=>{
    if (adminAuth != "admin" || adminAuth===undefined){
        return <Navigate to={redirect} />
    }
    return children ? children : <Outlet/>
}

export default ProtectedRoutes