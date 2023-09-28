import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

export default function Modal({
  priceFilter,
  categoryFilter,
  handlePriceFilter,
  handleCategoryFilter,
}) {
  const [toggle, setToggle] = useState(false);

  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];
  const prices = ["0-500", "501-1000", "1001-1500", "1501-2000"];

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="modal-container">
      <div className="filter-icon" onClick={handleToggle}>
        <FaFilter />
      </div>
      {toggle === true ? (
        <>
          <div className="filters">
            <div className="categoryFilter">
              <h3>Category</h3>
              {categories.map((category, index) => (
                <div key={index}>
                  <label>
                    <input
                      type="checkbox"
                      value={category}
                      checked={categoryFilter.includes(category)}
                      onChange={handleCategoryFilter}
                    />
                    {category}
                  </label>
                </div>
              ))}
            </div>
            <div className="priceFilter">
              <h3>Price Range($)</h3>
              {prices.map((price, index) => (
                <div key={index}>
                  <label>
                    <input
                      type="checkbox"
                      value={price}
                      checked={priceFilter.includes(price)}
                      onChange={handlePriceFilter}
                    />
                    {price}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
