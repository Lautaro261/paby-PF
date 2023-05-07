import { Link } from "react-router-dom"
import style from "./navBar.module.css"
import Logopaby from "../../imgs/Logopaby.png"
import { useAuth0 } from "@auth0/auth0-react"
import LogoutButton from "../LogoutButton/LogoutButton"
import LoginButton from "../LoginButton/LoginButton"

const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className={style.mainConteiner}>
            <div className={style.logo}>

                <h1><Link to="/home" className={style.link2}>
                    <img src={Logopaby} alt="logo" />
                </Link></h1>
            </div>
            <ul>

                <li>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</li>
                <li><p className={style.text}> | </p></li>
                <li><Link to="/about-us" className={style.link}>Acerca de nosotros...</Link></li>
            </ul>


        </div>
    )
}

export default Navbar