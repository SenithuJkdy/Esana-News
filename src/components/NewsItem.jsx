import React from 'react';

const NewsItem = ({ item }) => (
  <div key={item} className="flex gap-3">
    <div className="w-1/3">
      <img
        src="https://helakuru.sgp1.cdn.digitaloceanspaces.com/esana/images/lib/anura-president-india-visit-day1.jpg"
        alt="news"
        className="w-full object-cover rounded-lg"
        style={{ width: '220px', height: '70px' }}
      />
    </div>
    <div className="w-2/3">
      <p className="text-sm font-medium mb-2 line-clamp-3">
        කර ආණ්ඩුවක් භාරදී මාස එකහමාරකින් හාල්වලට
      </p>
      <div className="flex items-center gap-1 text-gray-500">
        <span className="text-xs">4h</span>
      </div>
    </div>
  </div>
);

export default NewsItem;