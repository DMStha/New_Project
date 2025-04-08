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

  return (
    <ProductContext.Provider value={{ s, handleTextChange, text }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
