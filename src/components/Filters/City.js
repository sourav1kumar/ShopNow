import React from "react";
import cities from './calc/calcCity'

function State(props) {
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
          City
        </button>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          <li key="11">
            <button
              className="dropdown-item"
              onClick={() => props.change(0, 0, "")}
            >
              All
            </button>
          </li>
          {cities.map((city) => (
            <li key={city}>
              <button
                className="dropdown-item"
                onClick={() => props.change(0, 0, city)}
              >
                {city}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default State;
