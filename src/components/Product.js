const Product = ({ product }) => (
  <div className="product" key={product.id}>
    <img src={product.image} alt={product.title} />
    <div className="title">
      <p>{product.title}</p>
      <span>${product.price}</span>
    </div>
  </div>
);

export default Product;
