import React from "react";
import Product from './Product'
import City from './City'
import State from "./State";
import "../../styles/filtersIndexCSS.css";

function index(props) {
  return (
    <div>
      <div className="mainDivOffilter">
        <center>
          <h4>Filter</h4>
          <hr />
        </center>

        <div className="filterContainer">
          <div className="childFilterContainer">
            <Product {...props}/>
          </div>
          <div className="childFilterContainer">
            <State {...props}/>
          </div>
          <div className="childFilterContainer">
            <City {...props}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
