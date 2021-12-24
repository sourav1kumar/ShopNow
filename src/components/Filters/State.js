import React from "react";
import states from "./calc/calcState";

//state function
function State(props) {
  return (
    <div>
      <div className="dropdown">
        <button
          style={{
              backgroundColor: "#232323",
              borderWidth: "0"
            }}
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          State
        </button>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          <li key="111">
            <button
              className="dropdown-item"
              onClick={() => props.change(0, "", 0)}
            >
              All
            </button>
          </li>
          {states.map((state) => (
            <li key={state}>
              <button
                className="dropdown-item"
                onClick={() => props.change(0, state, 0)}
              >
                {state}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default State;
