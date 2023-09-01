import { useEffect } from "react";
import useApi from "../hooks/useAPI";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/cart";

const Header = ({ selectedCategory, setSelectedCategory }) => {
  const headerUrl = "https://fakestoreapi.com/products/categories";
  const { data, loading, loadError } = useApi(headerUrl);
  // Created Custome hook for this as useAPI
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []); // Make sure to pass an empty array here to run the effect only once

  useEffect(() => {
    if (data.length > 0) {
      setSelectedCategory(data[0]);
    }
  }, [data, setSelectedCategory]);
  const value= useCartContext();
  console.log("raj",value)
  if (loading) return <div className="loading">loading headers</div>;
  else if (loadError) return <div>OOps Error headers</div>;
  else
    return (
      <div className="header-items">
        {data.map((cat) => (
          <Link
            to={`/categories/${cat}`} // Corrected line
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
<span className='cart-length'>0</span>

    </div>
    );
};

export default Header;
