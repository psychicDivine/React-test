import { useNavigate } from "react-router-dom";
import AddToCart from "./AddToCart";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("inside ahndle clisk");
    navigate(`/products/${product.id}`);
  };
  return (
    <div onClick={handleClick} className="product" key={product.id}>
      <img src={product.image} alt={product.title} />
      <div className="title">
        <p>{product.title}</p>
        <div className="product-body">
          <span>${product.price}</span>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
