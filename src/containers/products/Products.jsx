import React from 'react'
import { withRouter } from 'react-router-dom';
import './assets/Products.css'


const Products = ({src, text, description}) => {

	return (

		<div className="products">
        <img src={src} alt=""/>
        <span>{text}</span>
        <p>{description}</p>
		</div>

	);
}

export default withRouter(Products);