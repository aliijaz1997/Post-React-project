// src/App.js
import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const FormComponent = lazy(() => import("./components/FormComponent"));
const DataDisplay = lazy(() => import("./components/DataDisplay"));
const Pagination = lazy(() => import("./components/Pagination"));

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
      setLoading(false);
    }
  };

  const handleFormSubmit = async ({ title, body, userId }) => {
    try {
      const newPost = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body,
          userId: parseInt(userId),
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const {
        id,
        title: newTitle,
        body: newBody,
        userId: newUserId,
      } = newPost.data;
      setData(
        [
          ...data,
          { id, title: newTitle, body: newBody, userId: newUserId },
        ].reverse()
      );
    } catch (error) {
      console.error("Error submitting data", error);
    }
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="container">
      <h1 className="my-4 text-center">Manage Posts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <FormComponent onSubmit={handleFormSubmit} />
        {loading ? (
          <div>Loading data...</div>
        ) : (
          <DataDisplay data={currentPageData} />
        )}
        {pageCount > 1 && (
          <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
        )}
      </Suspense>
    </div>
  );
};

export default App;
