import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const {logout, user } = useAuth0()

    return(
        <button onClick={() => logout()}>Cerrar sesión</button>
    )
}
export default LogoutButton