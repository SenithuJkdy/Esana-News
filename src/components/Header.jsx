import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header = () => (
  <div>
    <div className=" mt-2 mb-4"
    style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <img
        src="https://www.helakuru.lk/assets/images/module_images/esena/esena-logo.png"
        alt=""
        className=""
        style={{ width: "200px", height: "auto" }}
      />
    </div>
  </div>
);

export default Header;
