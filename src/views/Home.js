import React from "react";
import LandingPage from "../components/LandingPage";
import SelfDefenceShortInfo from "../components/SelfDefenceShortInfo";

import NGOShortInfo from "../components/NGOShortInfo";

import WomenInTechShortInfo from "../components/WomenInTechShortInfo";

import { Button } from "react-bootstrap";
import Link from "../Routing/Link";

const Home = () => {
  return (
    <>
      <LandingPage />
      <SelfDefenceShortInfo />
      {/* <Education /> */}
      <WomenInTechShortInfo />
      {/* <NGOShortInfo /> */}
      <div 
      // style={{backgroundColor:"#e7edfd"}} 
      className="text-center py-5">
        <h2 className="my-3">Latest News In Women's Empowerment</h2>
        <Button className="rounded-pill">
          <Link className="text-decoration-none text-white" href="/newslist">
            Checkout
          </Link>
        </Button>
      </div>
      {/* <NewsList /> */}
    </>
  );
};

export default Home;
