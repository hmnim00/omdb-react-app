import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./containers/Home";
import Single from "./containers/Single";

const App = () => {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detalle/:imdbID">
          <Single />
        </Route>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
