import React from 'react'
import './assets/Header.css'

import { withRouter, Link } from 'react-router-dom';
class Header extends React.Component {
  render() {
    return(
      <>
      <Link to="/" >
          <img className="header-top-image" src="https://i.ibb.co/SmMYTVY/Logo-VERDE.png" alt="" />
          </Link>
      <div className="header">
        <div className="navbar">
        <Link className="navbar-item" to="/catalogo">Catálogo</Link>
        <Link className="navbar-item" to="/personalizar">Personalizar</Link>
        <Link className="navbar-item" to="/carrito">Carrito</Link>
        </div>
      </div>
      </>
    );
  }
}

export default withRouter(Header)
