import { useParams } from "react-router-dom";
import useApi from "../hooks/useAPI";
import Product from "./Product";

const ProductList = ({ defaultSelectedCategory }) => {
  const { category } = useParams();
  const selectedCategory = category || defaultSelectedCategory || "defaultCategory";
  const productListUrls = `https://fakestoreapi.com/products/category/${selectedCategory}`;
  const { data, loading, loadError } = useApi(productListUrls);

  if (loading) {
    // Use a loading spinner instead of plain text
    return <div className="loading-spinner">Loading Products...</div>;
  } else if (loadError) {
    // Provide a user-friendly error message
    return <div>Error loading products. Please try again later.</div>;
  } else if (data.length === 0) {
    // Handle the case when no products are found
    return <div>No products found in this category.</div>;
  } else {
    return (
      <div className="products">
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
};

export default ProductList;
