import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
/* global AppCpntainer, Component, document, Office, module, require */

let isOfficeInitialized = false;

const title = "Contoso Task Pane Add-in";

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <a href="/">Fintalk247</a>
        </li>
        <li>
          <Link to="/commands.html">Home</Link>
        </li>
        <li>
          <Link to="/commands/about">About</Link>
        </li>
        <li>
          <Link to="/commands/dashboard">Dashboard</Link>
        </li>
      </ul>

      <hr />

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route exact path="/commands.html">
          <Home />
        </Route>
        <Route path="/commands/about">
          <About />
        </Route>
        <Route path="/commands/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById("container")
);

function Home() {
  return (
    <div>
      <h2>This is my commmand home.</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2> this is Command Dashboard</h2>
    </div>
  );
}
