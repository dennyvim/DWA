import React from 'react'
import { withRouter} from 'react-router-dom'
import CatalogFrom from '../../components/catalogFilter/CatalogFilter'
import Header from '../../components/header/Header'
import Payment from '../../components/payment/Payment'
import Products from '../../components/products/Products'
import Rrss from '../../components/rrss/Rrss.js'
import CartProvider from '../../providers/CartProvider'
import './assets/Catalog.css'

const  Catalog = () => {
    return(
      <CartProvider>
      <div>
        <div className="floating-rrss">
          <Rrss></Rrss>
        </div>
        <Header/>
          <div className="title-container">
            <h1 className="title">Catálogo</h1>
          </div>

          <CatalogFrom/>


        <div className="products-container">
          <Products image="https://bit.ly/31r7KBx" text="Este es un producto" reference="VIBES-001" price="$120.000"></Products>
          <Products image="https://bit.ly/31r7KBx" text="Este es un producto" reference="VIBES-001" price="$100.000"></Products>
          <Products image="https://bit.ly/31r7KBx" text="Este es un producto" reference="VIBES-001" price="$100.000"></Products>
          <Products image="https://bit.ly/31r7KBx" text="Este es un producto" reference="VIBES-001" price="$100.000"></Products>
          <Products image="https://bit.ly/31r7KBx" text="Este es un producto" reference="VIBES-001" price="$100.000"></Products>
          <Products image="https://bit.ly/31r7KBx" text="Este es un producto" reference="VIBES-001" price="$100.000"></Products>
          <Products image="https://bit.ly/31r7KBx" text="Este es un producto" reference="VIBES-001" price="$100.000"></Products>
          <Products image="https://bit.ly/31r7KBx" text="Este es un producto" reference="VIBES-001" price="$100.000"></Products>
          <Products image="https://bit.ly/31r7KBx" text="Este es un producto" reference="VIBES-001" price="$100.000"></Products>
          <Products image="https://bit.ly/31r7KBx" text="Este es un producto" reference="VIBES-001" price="$100.000"></Products>

        </div>
        <Payment></Payment>
      </div>
      </CartProvider>
    );
  }
export default withRouter(Catalog)