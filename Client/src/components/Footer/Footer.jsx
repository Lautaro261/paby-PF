import { Link } from "react-router-dom"
import style from "./Footer.module.css"
import Logopaby from "../../imgs/Logopaby.png"
import socialmedia from "./socialmedia.png"

const Footer=()=>{
    return(
        <div className={style.padre}>
            <div class={style.flexcontainer}>
                <img src={Logopaby} alt="logo" class={style.flexitems}/>
                 <div class={style.flexitems}>SEGUINOS</div>
                 <img src={socialmedia} alt="logo" class={style.flexitems}/>
            </div>

            <div class={style.flexcontainer}>
                <div class={style.flexitems}>USUARIOS</div>
                 <div class={style.flexitems}>INGRESAR</div>
                <div class={style.flexitems}>REGISTRARSE</div>
            </div>

            <div class={style.flexcontainer}>
            <div class={style.flexitems}>USUARIOS</div>
                 <div class={style.flexitems}>INGRESAR</div>
                <div class={style.flexitems}>REGISTRARSE</div>
            </div>

            <div class={style.flexcontainer}>
            <div class={style.flexitems}>Team PABY</div>
                 <div class={style.flexitems}>Contactanos</div>
                <div class={style.flexitems}>Acerca de nosotros</div>
            </div>


        </div>
    );
}

export default Footer