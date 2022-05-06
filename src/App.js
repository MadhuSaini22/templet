import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import MoneyCard from "./pages/MoneyCard/MoneyCard";
import TimeTable from "./pages/TimeTable/TimeTable";
import Plan from "./pages/Plan/Plan";
import FareChart from "./pages/FareChart/FareChart";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/moneycard" exact>
            <MoneyCard />
          </Route>
          <Route path="/timetable" exact>
            <TimeTable />
          </Route>
          <Route path="/plan" exact>
            <Plan />
          </Route>
          <Route path="/farechart" exact>
            <FareChart />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
