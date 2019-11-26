import React from "react";
import "./App.css";

import Tasks from "../src/components/Tasks";
import Taskform from "../src/components/Taskform";
import store from "./store/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Taskform />
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
