import BG_1 from "../../components/Backgrounds/BG_1"
import style from "./Landing.module.css"
import { Link } from "react-router-dom"
import Logopaby from "../../imgs/Logopaby.png"

function Landing() {  
  const   adminAuth= localStorage.getItem("rol")
  console.log(adminAuth)
    return (
      <>
        <div className={style.Bg}>
        <BG_1 />
        </div>
        <div className={style.body}>

        <main>
          <section className={style.introsection}>
          <img src={Logopaby} className={style.imglogo}></img>
            <h2>Bienvenido a Paby!</h2>
            <p>Aparcar nunca fue tan sencillo</p>
            <div className={style.Link}>
            <Link to="/home" className={style.linktext}>Vamos a ello!</Link>
            </div>   
          </section>
        </main>
        <div className={style.footerLanding}>
        <Link to="/about-us" className={style.footertext}>Acerca de nosotros</Link>
        </div>
        </div>
      </>
    )
  }
  
  export default Landing