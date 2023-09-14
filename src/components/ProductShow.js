import { useParams } from "react-router-dom";
import useApi from "../hooks/useAPI";
import AddToCart from "./AddToCart";

const ProductShow = () => {
  const { productId } = useParams();
  const { data, loading, loadError } = useApi(
    `https://fakestoreapi.com/products/${productId}`
  );

  if (loading) {
    // Add a loading indicator or message
    return <div className="loading">Loading product details...</div>;
  } else if (loadError) {
    // Provide a user-friendly error message
    return <div>Error loading product details. Please try again later.</div>;
  } else if (data) {
    return (
      <div className="product-show">
        <img src={data.image} alt={data.title} className="image" />
        <div className="product-show-description">
          <div className="product-show-title">{data.title}</div>
          <div className="product-body product-show-body">
            {/* AddToCart component */}
            <AddToCart product={data} />
          </div>
        </div>
      </div>
    );
  } else {
    // Handle the case when data is undefined or null
    return <div>No product data available.</div>;
  }
};

export default ProductShow;
