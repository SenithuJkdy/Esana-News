import React from "react";

const HorizontalNewsItem = ({ item }) => {
  const truncateTitle = (title) => {
    if (title.length > 56) {
      return title.substring(0, 58) + "..."; // Add ellipsis if truncated
    }
    return title;
  };

  return (
    <div className="flex-shrink-0 mr-4 ">
      {" "}
      {/* Use flex-shrink-0 to prevent shrinking */}
      <div className="flex flex-col cursor-pointer relative ">
        <div className="absolute flex items-center gap-2 bg-white px-2 py-1 top-16 left-28  rounded-sm">
        <img
          className=""
          src="https://www.helakuru.lk/assets/images/redCommentIcon.png"
          alt=""
          style={{ height: "13px", width: "13px" }}
        />
        <span className="text-xs text-red-700 ">999</span>
        </div>
     
        <img
          src="https://helakuru.sgp1.cdn.digitaloceanspaces.com/esana/images/lib/mahinda-amaraweera-2-archived.jpg"
          alt="news"
          className="object-cover  "
          style={{ width: "180px", height: "100px", borderRadius: "10px" }} // Adjust size as needed
        />
        
        <div className="w-[190px] ">
          <p
            className=" mb-2 line-clamp-2 mt-2 text-gray "
            style={{ fontWeight: "440", fontSize: "14px" }}
          >
            {/* ලුණු මෙට්‍රික්ටොන් 30,000 ක් ආනයනයට කැබිනට් අනුමැතිය */}
            {truncateTitle(
              "දේශීය කිරි නිෂ්පාදනය නැංවීමට උසස් තත්ත්වයේ පුං ගවයින් හා ගව ශුක්‍ර ආනයනය කෙ​රේ"
            )}
            {/* {item.title} Use the title from the item */}
            {/* {truncateTitle(item.title)} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNewsItem;

// දේශීය කිරි නිෂ්පාදනය නැංවීමට උසස් තත්ත්වයේ පුං ගවයින් හා ගව ශුක්‍ර ආනයනය කෙ​රේ
