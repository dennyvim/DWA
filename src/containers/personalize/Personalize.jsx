import React from 'react'
import Header from '../../components/header/Header';
import Steps from '../steps/Steps'
import { withRouter } from 'react-router-dom';
import Bolsa from './assets/images/bolsa.png'
import Pincel from './assets/images/pincel.png'
import Regalo from './assets/images/regalo_sin_color.png'
import Papel from './assets/images/papel.png'
import './assets/Personalize.css'
import Flecha from './assets/images/flecha.jpg'
import Subtitle from '../subtitle/Subtitle'
import Products from '../products/Products'
import Galletas from './assets/images/galletas.png'
import Vino from './assets/images/vino.png'
import Flores from './assets/images/flores.png'
import Oso from './assets/images/oso.png'
import RegaloColor from './assets/images/regalo.png'
import Caja from './assets/images/caja.png'
import Lupa from './assets/images/lupa.png'
import Payments from '../../components/payment/Payment'


const Personalize = () => {

	return (

		<React.Fragment>
			<Header />

			<main className="main-personalize">

				<div className='title_personalize'>
					<h1>Personalizar</h1>
				</div>

				<div className="container_steps">
					<Steps src={Bolsa} text="Selecciona los elementos que deseas incluir en el regalo" />
					<img src={Flecha} className="step_flecha" alt="" />
					<Steps src={Pincel} text="Elige una temática y/o color para la decoración" />
					<img src={Flecha} className="step_flecha" alt="" />
					<Steps src={Regalo} text="Elige la forma en que quieres empacarlo" />
					<img src={Flecha} className="step_flecha" alt="" />
					<Steps src={Papel} text="Escribe el mensaje y anexa las fotografías si lo deseas" />
				</div>

				<Subtitle text="1. ¿Qué quieres incluir?" />

				<div className="container_products">
					<Products src={Galletas} text="$6.000" description={`Ferrero rocher x3 Ref PVD-001`} />
					<Products src={Vino} text="$30.000" description="Baileys 75mL Ref PVD-003" />
					<Products src={Oso} text="$50.000" description="Peluche oso 60cm Ref PVD-004" />
					<Products src={Flores} text="$55.000" description="Arreglo rosas Ref PVD-005" />
				</div>

				<Subtitle text="2. ¿Cómo quieres que se vea?" />

				<br /> {/* Cuando agregue el código de este paso quita el br */}

				<Subtitle text="3. ¿Cómo lo quieres empacar?" />
				<div className="container_products">
					<Products src={RegaloColor} text="$6.000" description="Canasta de regalo Ref PVD-009" />
					<Products src={Caja} text="$5.000" description="Canasta de madera Ref PVD-011" />
					<Products src={Lupa} text="$4.000" description="FGlobo burbujax3 Ref PVD-002" />
				</div>

				<Subtitle text="4. ¿Qué quieres decirle?" />

				<br /> {/* Cuando agregue el código de este paso quita el br */}


				<div className="container_btn_final">
				<Subtitle text="Finalizar" btn_final={true} />
				</div>
			</main>

			<Payments />

		</React.Fragment>

	);
}

export default withRouter(Personalize);