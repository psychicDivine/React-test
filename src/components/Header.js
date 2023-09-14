import { useEffect } from "react";
import useApi from "../hooks/useAPI";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/cart";

const Header = ({ selectedCategory, setSelectedCategory }) => {
  const headerUrl = "https://fakestoreapi.com/products/categories";
  const { data, loading, loadError } = useApi(headerUrl);
  const { cart } = useCartContext();

  useEffect(() => {
    if (data.length > 0) {
      setSelectedCategory(data[0]);
    }
  }, [data, setSelectedCategory]);

  const cartLength = Object.values(cart).reduce(
    (total, product) => total + product.quantity,
    0
  );

  if (loading) return <div className="loading">Loading headers...</div>;
  else if (loadError) return <div>Error loading headers.</div>;
  else {
    return (
      <div className="header-items">
        {data.map((cat) => (
          <Link
            to={`/categories/${cat}`}
            onClick={() => {
              setSelectedCategory(cat);
            }}
            key={cat}
            className={
              "header-item " +
              (cat === selectedCategory ? "header-item-selected" : "")
            }
          >
            {cat}
          </Link>
        ))}
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className='cart-length'>{cartLength}</span>
      </div>
    );
  }
};

export default Header;
