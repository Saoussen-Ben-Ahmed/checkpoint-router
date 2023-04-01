import React from "react";
import Rate from "./Rate";
const Filter = (props) => {
  const handleChange = (e) => {
    props.setTitle(e.target.value);
  };
  return (
    <div>
      <form>
        <div className="search-btn">
          <input
            className="inputText"
            placeholder="Enter Movie Name "
            type="text"
            value={props.title}
            onChange={handleChange}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
          <div className="rating">
            <Rate rating={props.rating} setRating={props.setRating} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
