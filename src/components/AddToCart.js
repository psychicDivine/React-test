const AddToCart = ({ product }) => {
  const productIncart = false;
  if (!productIncart) return <div className="add-to-cart">Add To Cart</div>;
  else {
    return (
      <div className="add-to-cart-container">
        <div className="add">+</div>
        <div className="quantiy">0</div>
        <div className="add">+</div>
      </div>
    );
  }
};
export default AddToCart;
