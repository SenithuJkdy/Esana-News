import React from "react";
import NewsItem from "./NewsItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import './App.css'

const NewsList = ({ newsData, handleClickItem }) => (
  <div className="space-y-3" style={{ height: "265px", overflowY: "scroll" }}>
    {newsData.map((item) => (
      <NewsItem key={item.id} item={item} handleClickItem={handleClickItem} />
    ))}
  </div>
);

export default NewsList;
