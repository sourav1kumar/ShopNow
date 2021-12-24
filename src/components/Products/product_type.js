import React, { useState } from 'react';
import datas from "../../product_type_data.json";
import Item from "./Item";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import setting from './slidersetting'



function Product_type(props) {
  //filter by product type
  var releventdata = datas.filter(
    (data) => props.product === "" || props.product === data.product_type
  );

  //filtering by state
  releventdata = releventdata.filter(
    (data) => props.state === "" || props.state === data.location.state
  );
  
  //filtering by city
  releventdata = releventdata.filter(
    (data) => props.city === "" || props.city === data.location.city
  );
  
  return (
    <div style={{marginTop: "30px"}}>
      <h4>{props.product}</h4>
      <hr/>
      <div
        className="listOfCards"
        style={{
          padding: "10px",
          backgroundColor: "#131313",
          borderRadius: "9px",
        }}
      >
        <Slider {...setting}>
          {releventdata.map((data) => (
            <Item key={data.id} data={data} />
          ))}
        </Slider>
      </div>
      
    </div>
  );
}

export default Product_type;
