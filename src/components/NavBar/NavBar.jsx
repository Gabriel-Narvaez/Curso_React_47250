import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (    
      <header>
        <h1>MotoShop - Tienda de Motos</h1>
        <nav>
          <ul>
            <li>Motos</li>
            <li>Accesorios</li>
            <li>Repuestos</li>
          </ul>

        </nav>
        <CartWidget />
      </header>    
  )
}

export default NavBar