import React from "react";
import "./Pagination.css";
import { useTheme } from "../../Providers/ThemeProvider";
function Pagination({
  numberOfPostPerPage,
  totalPosts,
  changeCurrentPage,
  currentPage,
}) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / numberOfPostPerPage); i++) {
    pageNumber.push(i);
  }
  const { currentTheme } = useTheme();
  return (
    <div className="pagination">
      {pageNumber.map((number) => (
        <div
          onClick={() => changeCurrentPage(number)}
          className={`pagination__btn ${
            currentPage === number ? "Disabled" : ""
          }`}
          key={number}
          style={{ color: `${currentTheme ? "white" : "black"}` }}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

export default Pagination;
