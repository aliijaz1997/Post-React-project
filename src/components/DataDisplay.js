import React from "react";
import styles from "./DataDisplay.module.css";

const DataDisplay = ({ data }) => (
  <div className={`p-4 ${styles.dataDisplay}`}>
    {data.length === 0 ? (
      <p className="text-muted">No data to display.</p>
    ) : (
      data.map((item) => (
        <div key={item.id} className={`card mb-3 ${styles.card}`}>
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              User ID: {item.userId}
            </h6>
            <p className="card-text">{item.body}</p>
          </div>
        </div>
      ))
    )}
  </div>
);

export default DataDisplay;
