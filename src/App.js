import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Photos, Links, Viewpager } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/photos" exact component={() => <Photos />} />
          <Route path="/links" exact component={() => <Links />} />
          <Route path="/card" exact component={() => <Viewpager />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;