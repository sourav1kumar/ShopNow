import React, { useState, useEffect } from "react";
import Filter from "./components/Filters";
import Header from "./components/Header/CompanyName";
import Products from "./components/Products";
import "./styles/app.css";

function App() {
  const [product, setproduct] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");

  useEffect(() => {
    // console.log(`product is ${product}`);
    // console.log(`state is ${state}`);
    // console.log(`city is ${city}`);
  });

  function preferences(newproduct, newstate, newcity) {
    if (newproduct !== 0) setproduct(newproduct);
    if (newstate !== 0) setstate(newstate);
    if (newcity !== 0) setcity(newcity);
  }

  return (
    <div className="App container-fluid mainAppDiv">
      <div className="filterDiv">
        <Filter change={preferences} />
      </div>
      <div className="productDiv">
        <Header />
        <p>Products</p>
        <Products product={product} state={state} city={city} />
      </div>
    </div>
  );
}

export default App;
