import { useCartContext } from "../context/cart";

const AddToCart = ({ product }) => {
    const { cart, addToCart, removeToCart } = useCartContext();
    console.log("here", product)
    const productInCart = cart[product.id];
    const handleAdd = (event) => {
        addToCart(product);
        event.stopPropagation();
    }
    const handleRemove = (event) => {
        removeToCart(product);
        event.stopPropagation();
    }
    if (!productInCart) return <div onClick={handleAdd} className="add-to-cart">Add to Cart</div>
    return (
        <div className="add-to-cart-container">
            <div className="add" onClick={handleRemove}>-</div>
            <div className="quantity">{productInCart.quantity}</div>
            <div className="add" onClick={handleAdd} >+</div>
        </div>);
}
export default AddToCart;