import style from "./ShoppingCart.module.css"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const ShoppingCart=()=>{
    const dispatch = useDispatch();
    //const productos = useSelector(state => state.productos);
    const cart = useSelector(state => state.carrito);

    //const eliminarReserva = (id) => {dispatch({ type: 'carrito/eliminarProducto', payload: id });};

      // Función para pagar los productos del carrito
  const pagarCarrito = () => {
    dispatch({ type: 'carrito/pagar' });
  };

  const renderizarCarrito = () => {
        // if (cart.length === 0 ) {
         if (true ) {  
         return <p>No hay productos en el carrito</p>;
         }

        return carrito.map(producto => (
        <div key={producto.id}>
            <p>{producto.nombre}</p>
            <p>${producto.precio}</p>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
      </div>
    ));
  };




    return(
        <div className={style.main}>
            <p>Tus reservas por pagar</p>
        <div className={style.cont}>
        {renderizarCarrito()}
        {false > 0 && (
            <button onClick={pagarCarrito}>Pagar</button>
        )}
            </div>
        </div>
    )

}

export default ShoppingCart;