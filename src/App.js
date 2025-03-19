import React, { Fragment } from "react";
//import logo from "./logo.svg";
import NinjaPage from "./pages/tailwindPage/index";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <h1 className="text-3xl font-bold underline">
            Hello React18 + Tailwind!
          </h1>
        </section>
      </div> */}
      <NinjaPage/>
    </Fragment>
  );
}

export default App;
