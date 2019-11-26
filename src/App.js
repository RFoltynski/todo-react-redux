import React from "react";
import "./App.css";

import Tasks from "../src/components/Tasks";
import Taskform from "../src/components/Taskform";

function App() {
  return (
    <div className="App">
      <Taskform />
      <Tasks />
    </div>
  );
}

export default App;
