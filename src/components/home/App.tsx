import React, { ReactElement } from "react";
import logo from "../../assets/images/logo.svg";
import "../../assets/css/home/App.css";

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-log  o" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to ddreload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
