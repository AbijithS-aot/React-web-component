import React from 'react';
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import App from './App';


const Wc  = () => (
  <div id="webcomp-counter">
    <h1>Counter component</h1>
    <App/>
  </div>
);

customElements.define("react-wc", reactToWebComponent(Wc, React, ReactDOM));