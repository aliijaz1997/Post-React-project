// src/components/Pagination.js
import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

const Pagination = ({ pageCount, onPageChange }) => (
  <ReactPaginate
    previousLabel={"previous"}
    nextLabel={"next"}
    breakLabel={"..."}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    onPageChange={onPageChange}
    containerClassName={`pagination justify-content-center ${styles.pagination}`}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName={"page-link"}
    activeClassName={"active"}
  />
);

export default Pagination;
