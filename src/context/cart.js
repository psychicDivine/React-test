import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
    return( 
    <CartContext.Provider value={{name:"ms",sirName:"Dhoni"}}>
     {children}
    </CartContext.Provider>
    );
}

export default CartContextProvider;