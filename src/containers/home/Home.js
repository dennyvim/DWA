import React from 'react'
import Header from '../../components/header/Header.js'
import Box from '../../components/box/Box.js'
import Button from '../../components/button/Button.js'
import Rrss from '../../components/rrss/Rrss.js'
import UserCard from '../../components/userCard/UserCard'
import { withRouter, Link } from 'react-router-dom';
import './assets/Home.css'
import Payment from '../../components/payment/Payment.jsx'

class Home extends React.Component {

  render(){
    return (
      <div>
        <div className="floating-rrss">
        <Rrss></Rrss>
        </div>
          <Header />
        <div className="main">
          <p>Bienvenido a este taller de sonrisas <br/> ¡Anímate a vibrar con nosotros!</p>
        </div>

        <div className="divider-container">
          <div className="divider-item">
            <img src="https://www.flaticon.com/svg/static/icons/svg/1124/1124602.svg" alt=""/>
            <p>Atención de Lunes a Viernes de 8:00 AM a 5:00 PM <br/> Sábados, Domingos y festivos de 9:00 AM a 3:00PM</p>
          </div>
          <div className="divider-item">
            <img src="https://www.flaticon.com/svg/static/icons/svg/925/925736.svg" alt=""/>
            <p>Envios en Medellín y Área Metropolitana</p>
          </div>
          <div className="divider-item">
            <img src="https://www.flaticon.com/svg/static/icons/svg/925/925735.svg" alt=""/>
            <p>Múltiples opciones de pago</p>
          </div>
        </div>

        <div className="button-home-container">
          <Button text="CATÁLOGO"></Button>
          <Button text="PERSONALIZAR"></Button>
        </div>

        <div className="boxes-container">
          <Box imgUrl="https://i.ibb.co/T8C5Bq3/iconfinder-gift-1679564.png" title= "Cajas" imgAlt="caja"/ >
          <Box imgUrl="https://i.ibb.co/Lrg0190/iconfinder-562-Gift-Box-Box-Surprize-Delivery-valentine-valentines-day-love-4171404.png" title= "Anchetas" imgAlt="anchetas"/ >
          <Box imgUrl="https://i.ibb.co/n3fMcVP/iconfinder-Party-Newyears-GIft-2817119.png" title= "Flores" imgAlt="flores"/ >
          <Box imgUrl="https://i.ibb.co/JCxPhHN/iconfinder-Party-Newyears-Ballon-2817132.png" title= "Globos" imgAlt="globos"/ >
        </div>
        <div className="testimonials-button">
          <Button text="TESTIMONIOS"></Button>
        </div>
        <div className="testimonials">
          <UserCard description="Excelente servicio, lo mejor de lo mejor" user="- Manuela" userPicture="https://i.ibb.co/37M1R6Y/iconfinder-afro-woman-female-person-4043231.png"/>
          <UserCard description="Vibes es un excelente emprendimiento" user="- Virginia" userPicture="https://i.ibb.co/37M1R6Y/iconfinder-afro-woman-female-person-4043231.png"/>
          <UserCard description="Muy buena atención y gran variedad" user="- Wilson" userPicture="https://i.ibb.co/37M1R6Y/iconfinder-afro-woman-female-person-4043231.png"/>
        </div>
        <Payment></Payment>
      </div>
    );
  }
}

export default withRouter(Home)