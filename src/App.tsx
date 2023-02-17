import React from "react";
import FirstSample from "./samples/FristSample";
import SecondSample from "./samples/SecondSample";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstSample />
        <SecondSample />
      </header>
    </div>
  );
}

export default App;
