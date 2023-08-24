import useApi from "../hooks/useAPI";

const Header = ({ selectedCategory, setSelectedCategory }) => {
  const headerUrl = "https://fakestoreapi.com/products/categories";
  const { data, loading, loadError } = useApi(headerUrl);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // }, []); // Make sure to pass an empty array here to run the effect only once

  if (loading) return <div className="loading">loading headers</div>;
  else if (loadError) return <div>OOps Error headers</div>;
  else
    return (
      <div className="header-items">
        {data.map((cat) => (
          <div
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
          </div>
        ))}
      </div>
    );
};

export default Header;
