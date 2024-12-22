import React from 'react';

const NewsItem = ({ item, handleClickItem }) => {
  const truncateTxt = (txt) => {
    if (txt.length > 65) {
      return txt.substring(0, 70)+ "..."; // Add ellipsis if truncated
    }
    return txt;
  };

  return (
    <div key={item.id} className="flex gap-3 cursor-pointer" onClick={() => handleClickItem(item)}>
      <div className="w-1/3">
        <img
          src={item.image}
          alt="news"
          className="w-full object-cover rounded-lg"
          style={{ width: '220px', height: '70px' }}
        />
      </div>
      <div className="w-2/3">
        <p className="text-sm font-sans mb-2 line-clamp-2 mr-2 gray-2">
          {truncateTxt(item.title || "")}
        </p>
        <div className="flex items-center gap-1 text-gray-500">
          <img src="https://www.helakuru.lk/assets/images/module_images/esena/timer.svg" alt="" style={{ height: "12px", width: "12px" }} />
          <span className="text-gray" style={{ fontSize: "10px" }}>{item.time}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;