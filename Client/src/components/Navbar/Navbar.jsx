import { Link } from "react-router-dom";
import style from "./navBar.module.css";
import Logopaby from "../../imgs/Logopaby.png";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton/LogoutButton";
import LoginButton from "../LoginButton/LoginButton";
import OwnLogin from "../OwnLogin/OwnLogin";
import RegisterOwn from "../RegisterOwn/RegisterOwn";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className={style.navbarContainer} id="nav">
      <div className={style.logoContainer}>
        <Link to="/home" className={style.logo}>
          <img src={Logopaby} alt="logo" />
        </Link>
      </div>
      <ul className={style.navLinks}>
        <li>
          <Link to="/about-us" className={style.navLink}>
            Acerca de nosotros
          </Link>
        </li>
        <li className={style.buttonContainer}>
       <OwnLogin />
        </li>
        
        <li className={style.buttonContainer}>
       <RegisterOwn />
        </li>
        
        <li className={style.buttonContainer}>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;