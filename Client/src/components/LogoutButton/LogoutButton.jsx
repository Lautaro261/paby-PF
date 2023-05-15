import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const {logout } = useAuth0()

    const handleLogoutAuth0 = ()=> {
        logout()
        localStorage.clear()
    }

    return(
        <button onClick={handleLogoutAuth0}>Cerrar sesión</button>
    )
}
export default LogoutButton