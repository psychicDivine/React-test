import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

import ProductList from "./components/ProductList";
import ProductShow from "./components/ProductShow";
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
        <Routes>
          <Route
            path="/"
            element={<ProductList defaultSelectedCategory={selectedCategory} />}
          />
          <Route
            path="/categories/:category"
            element={<ProductList defaultSelectedCategory={selectedCategory} />}
          />
          <Route path="/products/:productId" element={<ProductShow />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
