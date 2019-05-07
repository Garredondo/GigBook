import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import VenueProfile from "./pages/VenueProfile";
import ArtistProfile from "./pages/ArtistProfile";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/venue/profile/:id" component={VenueProfile} />
          <Route exact path="/artist/profile/:id" component={ArtistProfile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
