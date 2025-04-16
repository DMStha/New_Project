import React from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const [text, setText] = React.useState("");

  const handleTextChange = (event) => {
    setText("hello world");
  };

  const s = {
    name: "Diom",
    age: 24,
  };

  const [articles, setArticles] = React.useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=2411d9955b7f4c5d918368c19a5a5be3"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setArticles(data.articles);
      console.log(data.articles);
    } catch (error) {
      console.error("Fetching error", error);
    }
  };
  return (
    <ProductContext.Provider
      value={{ s, handleTextChange, articles, fetchData }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
