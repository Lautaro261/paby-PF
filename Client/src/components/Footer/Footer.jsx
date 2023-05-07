import { Link } from "react-router-dom"
import style from "./Footer.module.css"
import Logopaby from "../../imgs/Logopaby.png"
import socialmedia from "./socialmedia.png"

const Footer=()=>{
    return(
        <div className={style.padre}>
            <div className={style.flexcontainer}>
                <img src={Logopaby} alt="logo" className={style.flexitems}/>
                 <div className={style.flexitems}>SEGUINOS</div>
                 <img src={socialmedia} alt="logo" className={style.flexitems}/>
            </div>

            <div className={style.flexcontainer}>
                <div className={style.flexitems}>USUARIOS</div>
                 <div className={style.flexitems}>INGRESAR</div>
                <div className={style.flexitems}>REGISTRARSE</div>
            </div>

            <div className={style.flexcontainer}>
            <div className={style.flexitems}>USUARIOS</div>
                 <div className={style.flexitems}>INGRESAR</div>
                <div className={style.flexitems}>REGISTRARSE</div>
            </div>

            <div className={style.flexcontainer}>
            <div className={style.flexitems}>Team PABY</div>
                 <div className={style.flexitems}>Contactanos</div>
                <div className={style.flexitems}>Acerca de nosotros</div>
            </div>


        </div>
    );
}

export default Footer