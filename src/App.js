import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Photos, Links, Viewpager } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/jzhu831/" exact component={() => <Home />} />
          <Route path="/jzhu831/photos" exact component={() => <Photos />} />
          <Route path="/jzhu831/links" exact component={() => <Links />} />
          <Route path="/jzhu831/card" exact component={() => <Viewpager />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;