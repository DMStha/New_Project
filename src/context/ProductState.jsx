import React from "react";
import ProductContext from "./productContext";
import { useReducer } from "react";

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
  const [products, setProducts] = React.useState([]);
  const product = [
    {
      _id: 1,
      title: "apple",
      description: "Apple is good for health",
      price: 50,
      instock: 10,
    },
    {
      _id: 2,
      title: "banana",
      description: "Banana is good for health",
      price: 60,
      instock: 5,
    },
    {
      _id: 3,
      title: "Mango",
      description: "Mango juice  is sweet",
      price: 40,
      instock: 4,
    },
    {
      _id: 4,
      title: "Grapes",
      description: "Grapes juice  is sweet",
      price: 40,
      instock: 4,
    },
  ];

  // eslint-disable-next-line no-undef
  const [state, dispatch] = useReducer(cartReducer, {
    products: product,
    cart: [],
  });

  return (
    <ProductContext.Provider
      value={{ s, handleTextChange, articles, fetchData, state, dispatch }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
