import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/Views/Home/Home";
import Test from "./Components/Views/Test/Test";
import Navbar from "./Components/UI/Navbar/Navbar";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json",
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <Router>
      <Navbar />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/region/:region"></Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">{data && <Home data={data} />}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
