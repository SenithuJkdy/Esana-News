import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import './App.css'

const NewsCategories = () => (
  <div className="flex gap-3 mb-4 ">
    <button className="px-3 py-2 text-red-500 border-b-2 border-red-500">All</button>
    <button className="px-3 py-2 text-gray-500">සිද්ධි</button>
    <button className="px-3 py-2 text-gray-500">හඬපට</button>
    <button className="px-3 py-2 text-gray-500">නිවේදන</button>
    <button className=" text-gray-500 ">ප්‍රකාශ</button>
   
  </div>
);

export default NewsCategories;