import React from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const s = {
    name: "Diom",
    age: 24,
  };

  return (
    <ProductContext.Provider value={{ s }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
