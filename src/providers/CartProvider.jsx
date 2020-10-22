import React, { useEffect, useState} from 'react'
import { createContext } from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        let localItems = [];
        for(let i=0; i<localStorage.length; i++) {
            localItems = [...localItems, JSON.parse(localStorage.getItem(i))]
            if(i === localStorage.length - 1) {
                setItems([...localItems])
            }
        }
    }, [])

    return <CartContext.Provider
        value={{
            items,
            setItems
        }}
        >
            {children}
        </CartContext.Provider>
}

export default CartProvider;