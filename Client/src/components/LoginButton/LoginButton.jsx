import {useAuth0} from "@auth0/auth0-react";

const LoginButton= ()=>{
    const { loginWithPopup, user } = useAuth0();

    return(
        <button onClick={()=>  loginWithPopup()}>Ingresar</button>
    )
}

export default LoginButton