import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LogoutButton from "../LogoutButton/LogoutButton";
import RegisterOwn from "../RegisterOwn/RegisterOwn";
import OwnLogin from "../OwnLogin/OwnLogin";
import OwnLogout from "../OwnLogout/OwnLogout";

import Logopaby from "../../imgs/Logopaby.png";
import style from "./navBar.module.css";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const isLoggedIn = localStorage.getItem(`isLoggedIn`)
  const token= localStorage.getItem(`token`)

  return (
    <nav className={style.navbarContainer} id="nav">
      <div className={style.logoContainer}>
        {token && 
        <Link to="/admin/home" className={style.logo}>
          <img src={Logopaby} alt="logo" />
        </Link>}
        {!token && 
        <Link to="/home" className={style.logo}>
          <img src={Logopaby} alt="logo" />
        </Link>}
      </div>
      <ul className={style.navLinks}>
        <li>
          <Link to="/about-us" className={style.navLink}>
            Acerca de nosotros
          </Link>
        </li>

        <li className={style.buttonContainer}>
          {isLoggedIn || isAuthenticated ? null : <OwnLogin />}
        </li>

        <li className={style.buttonContainer}>
          {isLoggedIn || isAuthenticated ? null : <RegisterOwn />}
        </li>

        <li className={style.buttonContainer}>
          {isLoggedIn ? <OwnLogout /> : null}
        </li>

        <li className={style.buttonContainer}>
          {isAuthenticated ? <LogoutButton /> : null}
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;