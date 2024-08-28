import React from "react";
import LandingPage from "../components/LandingPage";
import SelfDefenceShortInfo from "../components/SelfDefenceShortInfo";



import WomenInTechShortInfo from "../components/WomenInTechShortInfo";

const Home = () => {
  return (
    <>
      <LandingPage />
      <SelfDefenceShortInfo />
      {/* <Education /> */}
      <WomenInTechShortInfo />
      {/* <NGOShortInfo /> */}
      
    </>
  );
};

export default Home;
