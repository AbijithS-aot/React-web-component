import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import PropTypes from 'prop-types';
import App from "./App";


const index = ({url})=>{
  console.log("url",url)
  return (
    <div >
    <h1>Web component</h1>
    <App src={url}/>
  </div>
  )
}
index.propTypes = {
  url: PropTypes.string.isRequired,
};

customElements.define("react-wc", reactToWebComponent(index, React, ReactDOM));