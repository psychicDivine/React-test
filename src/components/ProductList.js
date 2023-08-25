import { useParams } from "react-router-dom";
import useApi from "../hooks/useAPI";
import Product from "./Product";

const ProductList = ({ defaultSelectedCategory }) => {
  const { category } = useParams();
  const selectedCategory = category || defaultSelectedCategory;
  const productListUrls = `https://fakestoreapi.com/products/category/${selectedCategory}`;
  const { data, loading, loadError } = useApi(productListUrls);

  if (loading) return <div className="loading">loading Products...</div>;
  else if (loadError) return <div>oopes error on ProductList</div>;
  else
    return (
      <div className="products">
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
};

export default ProductList;
