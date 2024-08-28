import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import WomenInTech from "./views/WomenInTech";
import Home from "./views/Home";
import ReactNavbar from "./components/ReactNavbar";
import SelfDefence from "./views/self_defence/SelfDefence";
import Route from "./Routing/Route";
import WomenActivists from "./views/WomenActivists";
import WomenSafetyLaws from "./views/WomenSafetyLaws";
import NGO from "./views/NGO";
import NewsList from "./components/news/NewsList";
import Login from "./views/Login";
import Signup from "./views/Signup";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  }, []);

  const checkloginfirst = (Component) => {
    return isLoggedIn ? <Component /> : <Login />;
  };

  return (
    <div style={{ backgroundColor: "$d3e5e9" }}>
      <ReactNavbar />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/selfdefence">
        {checkloginfirst(SelfDefence)}
      </Route>
      <Route path="/womenintech">
        {checkloginfirst(WomenInTech)}
      </Route>
      <Route path="/womenactivists">
        {checkloginfirst(WomenActivists)}
      </Route>
      <Route path="/womensafety">
        {checkloginfirst(WomenSafetyLaws)}
      </Route>
      <Route path="/ngo">
        {checkloginfirst(NGO)}
      </Route>
      <Route path="/newslist">
        {checkloginfirst(NewsList)}
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Footer />
    </div>
  );
};

export default App;
