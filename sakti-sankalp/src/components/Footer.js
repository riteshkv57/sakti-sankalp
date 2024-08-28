import React from "react";

const Footer = (props) => {
  return (
    <div 
    // style={{backgroundColor:"#231a4f"}}
     className="text-center text-dark py-3">
      <h3>Connect with us</h3>
      <a href="#">
        <i className="bi bi-twitter text-dark  m-1 px-3"></i>
      </a>
      <a href="#">
        <i className="bi bi-linkedin text-dark m-1 px-3"></i>
      </a>
      <a href="#">
        <i className="bi bi-facebook text-dark m-1 px-3"></i>
      </a>
      <a href="#">
        <i className="bi bi-github text-dark m-1 px-3"></i>
      </a>
      <p className="pt-4">Copyright © TY-B 24, 2024</p>
    </div>
  );
};

export default Footer;
