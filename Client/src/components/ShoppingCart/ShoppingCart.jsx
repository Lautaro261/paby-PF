import style from "./ShoppingCart.module.css"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Fill } from "../../redux/features/carts/cartsSlice";
import {User, useAuth0} from "@auth0/auth0-react"
import Loader from "../Loader/Loader";
import { Delete } from "../../redux/features/carts/cartsSlice";
import { Price } from "../../redux/features/carts/cartsSlice";


const ShoppingCart=()=>{
    const dispatch = useDispatch();
    const { user, isLoading} = useAuth0()
    //const userId = user && user.sub;    
    const userId =localStorage.getItem(`sub`);
    
    useEffect(() => {
      if (userId) {
        dispatch(Fill(userId));
        dispatch(Price(userId))
      }
    }, [dispatch, userId]);

  const refresh=()=>{
    dispatch(Fill(userId));
  }

    
    const cart = useSelector(state => state.carts.cart);
    const link = useSelector(state => state.carts.payment)
    const total = useSelector(state => state.carts.total)
    

    const eliminarReserva = (id) => {
      const data=[userId, id]
      console.log("eliminar ", id)
      dispatch(Delete(data));
      refresh();
    };


  const renderizarCarrito = () => {
    if (isLoading || !userId ) {
      console.log( "cargando...")
     return (<div><Loader/></div>);
     }
        if ((!isLoading && cart && cart.cartId) || (userId && cart && cart.cartId)) {
         return (<div>agrega reservaciones para continuar...</div>);
         }
         if (cart && cart.length!=0 && !cart.cartId){
           return cart.map((elem, index) => (
            
           <div key={elem.id} className={style.element}>
               <p>{index+1}.</p>
               <p>hora de entrada:</p><p>{elem.admission_time}</p>
               <p>hora de salida:</p><p>{elem.departure_time}</p>
               <p>valor:</p><p>{elem.full_reserve_value}</p>
               <button onClick={() => eliminarReserva(elem.id)}>Eliminar</button>
         </div>
       ));
         }
  };
    return(
        <div className={style.main}>
            <p>Tus reservas por pagar</p>
        <div className={style.cont}>
          <div className={style.father}>
        {renderizarCarrito()}
          </div>
        {cart && cart.length > 0 && (
          <div className={style.buttons}>
            <p>total: {total}</p>
            <a href={link}>ir a pagar</a>
          </div>
        )}
            </div>
        </div>
    )
}
export default ShoppingCart;