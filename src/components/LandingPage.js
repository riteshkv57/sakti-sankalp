import React from "react";
import logo from "../images/w_logo.svg";
import logo2 from "../images/w2_logo.svg";

const LandingPage = (props) => {
  return (
    <div>
      <section 
      style={{backgroundColor: "#f4f8ff"}} 
      className="text-dark p-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                <i>"The only limit to our realization of tomorrow is our doubts of today."</i>
              </h1>
              <p className="lead my-4 me-5 text-lg-end text-sm-center">
                - Franklin D. Roosevelt
              </p>
              {/* <button
                className="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Discover More
              </button> */}
            </div>

            <img
              className="img-fluid my-5 w-50 d-none d-sm-block"
              src={logo}
              alt="logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
