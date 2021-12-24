import React from 'react'
import products from './calc/calcProduct';

//Product function
function Product(props) {
    return (
      <div>
        <div className="dropdown">
          <button
            style={{
              backgroundColor: "#232323",
              borderWidth: "0",
            }}
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Products
          </button>
          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <li key="1">
              <button
                className="dropdown-item"
                onClick={() => props.change("", 0, 0)}
              >
                All
              </button>
            </li>
            {products.map((product) => (
              <li key={product}>
                <button
                  className="dropdown-item"
                  onClick={() => props.change(product, 0, 0)}
                >
                  {product}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Product
