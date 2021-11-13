import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import 'core-js/features/array';
import 'core-js/features/array/map';
import './index.css';
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import Router from "./components/Routers/Router";
initializeIcons();
ReactDOM.render(
    <Router></Router>,
    document.getElementById("container")
);
