import React, { useEffect, useState } from "react";
import Filters from "../Filters/Filters";
import Cards from "../Cards/Cards";
import Headers from "../Headers/Headers";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import "./LandingPage.css";
import Modal from "../Modal/Modal";

export default function LandingPage({ cart, setCart }) {
  const [data, setData] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [searchValueFilter, setSearchValueFilter] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  async function fetchData() {
    try {
      let response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products);
    } catch (error) {
      setData([]);
      alert(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handlePriceFilter = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCurrentPage(1);
      setPriceFilter((prevState) => [...prevState, event.target.value]);
    } else {
      setPriceFilter((prevState) =>
        prevState.filter((item) => item !== event.target.value)
      );
    }
  };
  const handleCategoryFilter = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCurrentPage(1);
      setCategoryFilter((prevState) => [...prevState, event.target.value]);
    } else {
      setCategoryFilter((prevState) =>
        prevState.filter((item) => item !== event.target.value)
      );
    }
  };

  const handleSearchValueFilter = (event) => {
    setCurrentPage(1);
    setSearchValueFilter(event.target.value);
  };
  return (
    <>
      <Headers cart={cart} onPage={"home"} />
      <div className="landing-container">
        <div className="left-container">
          <div className="filterbar">
            <Filters
              priceFilter={priceFilter}
              categoryFilter={categoryFilter}
              handlePriceFilter={handlePriceFilter}
              handleCategoryFilter={handleCategoryFilter}
            />
          </div>
        </div>
        <div className="right-container">
          <SearchBar
            searchValueFilter={searchValueFilter}
            handleSearchValueFilter={handleSearchValueFilter}
          />
          <div className="modalfilter">
            <Modal
              priceFilter={priceFilter}
              categoryFilter={categoryFilter}
              handlePriceFilter={handlePriceFilter}
              handleCategoryFilter={handleCategoryFilter}
            />
          </div>
          <div className="hello">
            <Cards
              priceFilter={priceFilter}
              categoryFilter={categoryFilter}
              searchValueFilter={searchValueFilter}
              data={data}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              cart={cart}
              setCart={setCart}
            />
          </div>
        </div>
      </div>
    </>
  );
}
