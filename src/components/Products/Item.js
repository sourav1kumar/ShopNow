import React from "react";
import image1 from "../../image1.jpg";
import "../../styles/productCard.css";

export default function Item(props) {
  return (
    <div
      className="cardDiv"
      style={{
        backgroundColor: "#232323",
        margin: "8px",
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      <div className="imageAndName">
        <div>
          <img
            src={image1}
            alt="image1"
            style={{
              width: 120,
              height: 120,
              borderRadius: 20,
              margin: 10,
            }}
          />
        </div>
        <div style={{ marginTop: "10px", paddingLeft: "5%" }}>
          <h4>{props.data.product_name}</h4>
          <p>{props.data.brand_name}</p>
          <h6>$ {props.data.price}</h6>
        </div>
      </div>
      <div className="secondDiv">
        <div>
          {props.data.location.city}, {props.data.location.state}
        </div>
        <div style={{marginLeft:"20px"}}>30 Nov '21</div>
      </div>
      <p>Description</p>
    </div>
  );
}
