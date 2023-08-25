import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div onClick={handleClick} className="product" key={product.id}>
      <img src={product.image} alt={product.title} />
      <div className="title">
        <p>{product.title}</p>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default Product;
