import React from 'react';
import NewsItem from './NewsItem';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import './App.css'

const NewsList = () => (
  <div className="space-y-4" style={{ height: '300px', overflowY: 'scroll' }}>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
      <NewsItem key={item} item={item} />
    ))}
  </div>
);

export default NewsList;