import React from "react";
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
  return (
    <div style={{backgroundColor:"$d3e5e9"}}>
      <ReactNavbar />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/selfdefence">
        <SelfDefence />
      </Route>
      <Route path="/womenintech">
        <WomenInTech />
      </Route>
      <Route path="/womenactivists">
        <WomenActivists />
      </Route>
      <Route path="/womensafety">
        <WomenSafetyLaws />
      </Route>
      <Route path="/ngo">
        <NGO />
      </Route>
      <Route path="/newslist">
        <NewsList />
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
