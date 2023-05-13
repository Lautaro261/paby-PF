import style from "./ShoppingCart.module.css"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Fill } from "../../redux/features/carts/cartsSlice";
import {useAuth0} from "@auth0/auth0-react"
import Loader from "../Loader/Loader";


const ShoppingCart=()=>{
    const dispatch = useDispatch();
    //const productos = useSelector(state => state.productos);
    const { user, isLoading} = useAuth0()
    const userId = user && user.sub;    
    
    useEffect(() => {
      if (userId) {
        console.log(userId, "DESDE USEFECT")
        dispatch(Fill(userId));
        console.log("ok")
      }
    }, [dispatch, userId]);
    
    const cart = useSelector(state => state.carts.cart);

    //const eliminarReserva = (id) => {dispatch({ type: 'carrito/eliminarProducto', payload: id });};

      // Función para pagar los productos del carrito
  const pagarCarrito = () => {
    dispatch({ type: 'carrito/pagar' });
  };

  const renderizarCarrito = () => {
    if (isLoading ) {
      console.log(cart, "cargando...")
     return (<div><Loader/></div>);
     }
        if (cart.length===0 ) {
         return (<div>agrega reservaciones para continuar...</div>);
         }

        return cart.map(elem => (
        <div key={elem.id}>
            <p>hora de entrada:</p><p>{elem.admission_time}</p>
            <p>hora de salida:</p><p>{elem.departure_time}</p>
            <p>hora de valor:</p><p>{elem.full_reserve_value}</p>
            <button onClick={() => eliminarProducto(elem.id)}>Eliminar</button>
      </div>
    ));
  };




    return(
        <div className={style.main}>
            <p>Tus reservas por pagar</p>
        <div className={style.cont}>
        {renderizarCarrito()}
        {cart.length > 0 && (
            <button onClick={pagarCarrito}>Ir a Pagar</button>
        )}
            </div>
        </div>
    )

}

export default ShoppingCart;