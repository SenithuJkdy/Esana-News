import React from 'react';
import Header from './Header';
import NewsCategories from './NewsCategories';
import NewsList from './NewsList';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NewsItem from './NewsItem';
import HorizontalNewsContainer from './HorizontalNewsContainer';
// import './App.css'

const newsItems = [
  { title: "Breaking News 1", description: "Description for breaking news 1" },
  { title: "Breaking News 2", description: "Description for breaking news 2" },
  { title: "Breaking News 3", description: "Description for breaking news 3" },
  { title: "Breaking News 3", description: "Description for breaking news 3" },
  { title: "Breaking News 3", description: "Description for breaking news 3" }
  // Add more news items as needed
];

const Sidebar = ({ newsData, handleClickItem }) => (
  <div className="col-lg-4 col-xl-4">
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-gray-200 rounded-full">
          <img src="src/images/chatbubble30.png" alt="" />
        </div>
        <span className="text-base font-semibold m-0 text-gray appearance-none">Top News</span>
      </div>

      <HorizontalNewsContainer newsItems={newsData} />
      <NewsCategories />
      <NewsList newsData={newsData} handleClickItem={handleClickItem} />
    </div>
  </div>
);

export default Sidebar;