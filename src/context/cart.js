import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
    const [cart, setCart] = useState({});

    const addToCart = (product) => {
        setCart((prevState) => {
            const newCart = { ...prevState };
            if (!newCart[product.id]) {
                newCart[product.id] = {
                    id: product.id,
                    quantity: 1
                };
            } else {
                const newProduct = { ...newCart[product.id] }; // Create a copy of the existing product
                newProduct.quantity += 1; // Increment the quantity by 1
                newCart[product.id] = newProduct;
            }
            return newCart;
        });
    };


    const removeToCart = (product) => {
        setCart((prevState) => {
            const newCart = { ...prevState };
            if (!newCart[product.id]) {
                return prevState;
            } else if (newCart[product.id].quantity === 1) {
                delete newCart[product.id];
            } else {
                const newProduct = newCart[product.id];
                newProduct.quantity -= 1;
                newCart[product.id] = newProduct;
            }
            return newCart;
        });
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
