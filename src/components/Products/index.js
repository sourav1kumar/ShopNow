import React from "react";
import ProductType from "./product_type";
import products from "../Filters/calc/calcProduct";

function index(props) {
  return (
    <div>
      {
        (props.product === "") ? 
        (
            products.map((product) => <ProductType product={product} state={props.state} city={props.city} />)
        ) : 
        (
            <ProductType {...props} />
        )
        }
    </div>
  );
}

export default index;
