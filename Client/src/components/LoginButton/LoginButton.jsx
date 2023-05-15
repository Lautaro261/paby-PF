import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithPopup, loginWithRedirect } = useAuth0();

    return (
        <button onClick={() => loginWithRedirect()}>Ingresar con Google</button>
    )
}

export default LoginButton
