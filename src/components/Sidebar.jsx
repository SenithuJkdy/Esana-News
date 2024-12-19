import React from 'react';
import Header from './Header';
import NewsCategories from './NewsCategories';
import NewsList from './NewsList';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import './App.css'

const Sidebar = () => (
  <div className="col-lg-4 col-xl-4">
    <div className="bg-white rounded-lg shadow-sm p-4">
    <div className="flex items-center gap-2 mb-4">
    <div className="w-6 h-6 bg-gray-200 rounded-full">
      <img src="src/images/chatbubble30.png" alt="" />
    </div>
    <h3 className="text-base font-semibold m-0 text-gray">Top News</h3>
  </div>
      <NewsCategories />
      <NewsList />
    </div>
  </div>
);

export default Sidebar;