import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import  {CartContext}  from '../../providers/CartProvider'

import './assets/Products.css'

const Products = (props) => {

    const {items, setItems} = useContext(CartContext)

    const [data, setData] = useState({
        price: props.price,
        image: props.image,
        text: props.text,
        reference: props.referenc
    })

    const handleSubmit = () => {
        localStorage.setItem(items.length, JSON.stringify(data))
        setItems([...items, data])
        console.log("entra a localStorage")
    }

    return(
        <div className="product-container">
            <img src={props.image} alt="" className="product-img"/>
            <p className="product-price">{props.price}</p>
            <p className="product-text">{props.text}</p>
            <p className="product-reference">{props.reference}</p>
            <button onClick={() => {
                  setData({
                    price: props.price,
                    image: props.image,
                    text: props.text,
                    reference: props.reference
                })
                console.log(data)
                handleSubmit()
            }}>Añadir al carrito</button>
        </div>
    );
}

export default Products