import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import "./styles.css";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log("app.js", selectedCategory);
  return (
    <div className="App">
      <div>
        <Header
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ProductList selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
