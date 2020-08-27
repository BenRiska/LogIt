import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Entry from "./Screens/Entry";
import Home from "./Screens/Home";

function App() {
  const [user, setUser] = useState(null);

  const logIn = () => {};

  const signUp = () => {};

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">{user ? <Home /> : <Entry />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
