import React from "react";
import "./Pagination.css";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const pages = (totalPages) => {
    let page = [];
    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
      page.push(currentPage);
    }
    return page;
  };

  const getPages = pages(totalPages);

  const handleFirstPage = () => {
    setCurrentPage(1);
  };
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };
  const handlePage = (item) => {
    setCurrentPage(item);
  };
  return (
    <div className="pagination-container">
      <span>
        Page {totalPages < 1 ? 0 : currentPage} of {totalPages}
      </span>
      <div className="pagination-btns">
        <button onClick={handleFirstPage}>{"<<"}</button>
        <button onClick={handlePreviousPage}>{"<"}</button>
        {getPages.map((item, index) => (
          <button
            key={index}
            onClick={() => handlePage(item)}
            id={index === currentPage - 1 ? "livepage" : ""}
            className="pageNumbers"
          >
            {item}
          </button>
        ))}
        <button onClick={handleNextPage}>{">"}</button>
        <button onClick={handleLastPage}>{">>"}</button>
      </div>
    </div>
  );
}
