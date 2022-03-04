// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from "react";
import Logo from "../templates/Logo";
import Main from "../templates/Main";
import Routes from './Routes'
import Footer from "../templates/Footer";

export default (props) => (
  <div className="app">
    <Logo />
    <Main>
      <div>
        <h3>Principal</h3>
        <hr />
        <Routes />
      </div>
    </Main>
    <Footer />
  </div>
);
