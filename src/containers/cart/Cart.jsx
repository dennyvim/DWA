import React, { useContext, useState } from "react";
import Header from "../../components/header/Header";
import { CartContext } from "../../providers/CartProvider";


const Items = () => {

    const {items} = useContext(CartContext)
    return (

        <>
        <Header></Header>
        <br/>
        <br/>
         <ul className="pet__container">
            {items.map((item, index)=>
            <li key={index} className="pet__item"> nombre: {item.text}
            </li>)}
        </ul>
        </>
    );


}

export default Items;