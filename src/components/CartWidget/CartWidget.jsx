import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  const imagenCarrito ="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping.png";
  return (
    <div className="cart-widget">
      <img className='imagenCarrito' src={imagenCarrito} alt="imagen de carrito" />
      <strong className='cart-count'>3</strong>
    </div>
  )
}

export default CartWidget