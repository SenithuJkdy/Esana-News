import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Sidebar from "./components/SideBar"; // Import the Sidebar component
import Header from "./components/Header";



const App = () => {

  const [data,setData] = useState([])
  const [selectedNews,setSelectedNews] = useState(null)
  


  useEffect(()=>{
    const fetchData =  async () =>{
      try{
        const response = await fetch('http://127.0.0.1:5000/esana/news');
        // const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20');
        // 
       
        if(!response.ok){
          console.log("Netwrk error data not fetched")
        }
        const newsData = await response.json();
        
        // console.log(data)
        if(newsData){
          setData(newsData)
          setSelectedNews(newsData[0])
          console.log(selectedNews)
          // console.log(data)
        }
    
      }catch{}
      
    }
    fetchData()
  },[])

  const handleClickItem = (newsItem)=>{
      setSelectedNews(newsItem)
  }


  const formatText = (text) => {
    return text
      .split(".")
      .filter((sentence) => sentence.trim())
      .map((sentence) => sentence.trim() + ".");
  };

  return (
    // <div className='main_container flex container-fluid h-svh' >
    <div
      className="main_container flex container-fluid h-svh bg-contain overflow-hidden"
      style={{
        backgroundImage:
          "URL('https://www.helakuru.lk/assets/images/body-bg.png')",
      }}
    >
      <img
        src="https://www.helakuru.lk/assets/images/helakuru-logo1.png"
        style={{ width: "40px", height: "40px" }}
        className="relative top-6 left-3 "
      />
      <div className="container-fluid bg-slate-100 mx-4 mt-3 mb-2 border-solid rounded-[33px] w-full overflow-hidden">
        <Header />
        <div className="row">
          <Sidebar newsData={data} handleClickItem={handleClickItem}/> {/* Use the Sidebar component */}
          {/* Main Content */}
          <div className="col-lg-8 col-xl-8">
          {selectedNews && (
            <div className="bg-white rounded-lg shadow-sm pt-1 pl-3 h-full">
              {/* Main Content Flex Container */}
              <div className="main-flex-cont flex gap-5 mb-4 mt-10 ">
                {/* Image */}
                <div
                  className="w-2/5"
                  style={{ width: "350px", height: "200px" }}
                >
                  <img
                    src={selectedNews.image}
                    alt="main news"
                    className="w-full rounded-lg"
                  />
                </div>

                {/* Title and Meta */}
                <div className="w-2/3 ">
                  <h3
                    className=" text-4xl mr-4 line-clamp-4  antialiased"
                    style={{
                      fontFamily:
                        '"Iskoola Pota", "Noto Sans Sinhala", sans-serif',
                    }}
                  >
                    {/* දේශපාලනයට ඕනෑ අවංක භාවයයි, අධ්‍යාපන සුදුසුකම් නෙවෙයි -
                    මහින්ද දේශප්‍රිය  */}
                    {selectedNews.title}
                  </h3>

                  {/* Time and Social Share */}
                  <div className="flex items-left gap-2 flex-col text-gray-500">
                    <div className="flex items-center gap-2 text-gray-500">
                      <img
                        src="https://www.helakuru.lk/assets/images/module_images/esena/timer.svg"
                        alt="Timer"
                        style={{ height: "18px", width: "18px" }}
                      />
                      <span className="text-base gray-1 pb-1">
                        දෙසැ. 22 පෙ.ව. 12:59
                      </span>
                    </div>

                    {/* Social Share Buttons */}
                    <div className="flex gap-[10px] mt-4 ">
                      <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <img
                          src="https://www.helakuru.lk/assets/images/facebook.png"
                          alt="facebook"
                        />
                      </button>
                      <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <img
                          src="https://www.helakuru.lk/assets/images/whatsapp.png"
                          alt="whatsapp"
                        />
                      </button>
                      <button className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                        <img
                          src="	https://www.helakuru.lk/assets/images/twitter.png"
                          alt="twitter"
                        />
                      </button>

                      <div className="relative ml-auto flex items-center mr-28">
                        <img
                        className="icon-size"
                          src="https://www.helakuru.lk/assets/images/reactions/reaction_like.gif"
                       
                          alt=""
                        />
                        <img
                          className="absolute left-5 icon-size"
                          src="https://www.helakuru.lk/assets/images/reactions/reaction_haha.gif"
                         
                          alt=""
                        />
                        <img
                          className="absolute left-10 icon-size"
                          src="https://www.helakuru.lk/assets/images/reactions/reaction_love.gif"
                    
                          alt=""
                        />
                        <span className="absolute left-[88px] text-gray "
                        style={{fontWeight:"445",fontSize:"15px"}}>
                          111
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="ml-2">
                {formatText(selectedNews.description).map((sentence, index) => (
                  <p
                    key={index}
                    className="text-base font-light text-gray leading-6"
                    style={{
                      fontFamily:
                        '"Iskoola Pota", "Noto Sans Sinhala", sans-serif',
                    }}
                  >
                    {sentence}
                  </p>
                ))}
                {/* <p className="max-w-4xl mx-auto p-4 ">
                  
                </p> */}
              </div>

              {/* Comment Section Title */}
                  {/* <div className="relative">
                  <span className=" absolute flex flex-row gap-4 items-center" style={{top:"58px"}}>
                <img
                  className=""
                  src="https://www.helakuru.lk/assets/images/module_images/esena/chat_bubble_64.png"
                  alt="comment loading image"
                  style={{width:"32px"}}
                />
                <span className="text-lg font-thin text-gray">මහජන ප්‍රතිචාර</span>
              </span>
                  </div> */}
              
            </div>
          )}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
