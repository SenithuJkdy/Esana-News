import React from 'react';

const NewsItem = ({ item }) =>{

  const truncateTxt = (txt) => {
    if (txt.length > 56) {
      return txt.substring(0, 58) + '...'; // Add ellipsis if truncated
    }
    return txt;
  };
  
  return(
  
  <div key={item} className="flex gap-3 cursor-pointer">
    <div className="w-1/3 ">
      <img
        src="https://helakuru.sgp1.cdn.digitaloceanspaces.com/esana/images/lib/anura-president-india-visit-day1.jpg"
        alt="news"
        className="w-full object-cover rounded-lg"
        style={{ width: '220px', height: '70px' }}
      />
    </div>
    <div className="w-2/3">
      <p className="text-sm font-sans mb-2 line-clamp-3 gray-2">
      {truncateTxt("ඒගොල්ලෝ හදලා තිබ්බ දිව්‍ය ලෝකය මාලිමාව ඇවිල්ලා අපායක් කළා කියලා මඩ ගහන්න පටන් අරගෙන තියෙනවා - දේවානන්ද සුරවීර")}
      </p>
      <div className="flex items-center gap-1 text-gray-500">
        <img src="	https://www.helakuru.lk/assets/images/module_images/esena/timer.svg" alt="" style={{height:"12px",width:"12px"}} />
        <span className=" text-gray" style={{fontSize:"10px"}}>4h</span>
      </div>
    </div>
  </div>
);
}

export default NewsItem;