import { Link } from "react-router-dom"
import style from "./navBar.module.css"
import Logopaby from "../../imgs/Logopaby.png"

const Navbar=()=>{
    return(
        <div className={style.mainConteiner}>
              <div className={style.logo}>
             
                <h1><Link to="/" className={style.link2}>
                <img src={Logopaby} alt="logo" />
                    </Link></h1>
            </div>
            <ul>
                <li><Link to="/contact-us" className={style.link}>Contactanos</Link></li>
                <li><p className={style.text}> | </p></li>
                <li><Link to="/about-us" className={style.link}>Acerca de nosotros...</Link></li>
            </ul>
            
            
        </div>
    )
}

export default Navbar