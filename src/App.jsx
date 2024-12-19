import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Sidebar from './components/SideBar'; // Import the Sidebar component
import Header from './components/Header';

const App = () => (
  <div className="container-fluid bg-red-200 p-4 	">
  <Header/>
    <div className="row">
      <Sidebar /> {/* Use the Sidebar component */}
      
      {/* Main Content */}
      <div className="col-lg-8 col-xl-8">
        <div className="bg-white rounded-lg shadow-sm p-4">
          {/* Main Content Flex Container */}
          <div className="flex gap-5 mb-4"
          style={{marginTop:"14px"}}>
            {/* Image */}
            <div className="w-2/5"
            style={{width:"350px", height:"200px"}}>
              <img
                src="https://helakuru.sgp1.cdn.digitaloceanspaces.com/esana/images/lib/tharka-ttr.jpg"
                alt="main news"
                className="w-full rounded-lg"
                
              />
            </div>
            
            {/* Title and Meta */}
            <div className="w-2/3">
              <h1 className="text-3xl font-bindumathi font-bold mb-4">
                ගොවින්ට හෙක්ටයාරයක් සඳහා රුපියල් ලක්ෂයක පූර්ණ වන්දියක් ලබාදීමට රජය බැඳිලා ඉන්නවා - නාමල් කරුණාරත්න
              </h1>
              
              {/* Time and Social Share */}
              <div className="flex items-left gap-2 flex-col text-gray-500">
                <span className="text-sm">දෙසැ. 12 පෙ.ව. 11:57</span>
               
                {/* Social Share Buttons */}
                <div className="flex gap-2 mt-4">
                  <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">f</span>
                  </button>
                  <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">w</span>
                  </button>
                  <button className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">t</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>ලියාපදිංචි වීම සඳහා මෙතැනින් පිවිසෙන්න.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;