import React from 'react';
import HorizontalNewsItem from './HorizontalNewsItem';
import '/src/App.css';

const HorizontalNewsContainer = ({newsItems}) => {
    // const newsItems = [
    //     { title: "Breaking News 1", time: "4h" },
    //     { title: "Breaking News 2", time: "2h" },
    //     { title: "Breaking News 3", time: "1h" },
    //     // Add more news items as needed
    //   ];
    
      return (
        <div className="flex overflow-x-auto  horizontal-scroll-container"> {/* Enable horizontal scrolling */}
          {newsItems.slice().reverse().map((item, index) => (
            <HorizontalNewsItem key={index} item={item} />
          ))}
        </div>
      );

    // <div className="d-flex overflow-auto">
    //   {newsItems.map((item, index) => (
    //     <div key={index} className="me-3 pr-3">
    //       <NewsItem item={item} />
    //     </div>
    //   ))}
    // </div>
    
};

export default HorizontalNewsContainer;