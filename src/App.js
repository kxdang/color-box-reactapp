import React from "react";
import "./App.css";

import BoxContainer from "./BoxContainer";

function App() {
  return (
    <div className="App">
      <BoxContainer />
      <h3>
        Enjoy the satisfaction of making every box the same color :) Click some
        boxes or keep refreshing for a disco party!
      </h3>
      <p>
        Created by <a href="https://www.kien.dev/">Kien Dang</a>
      </p>
    </div>
  );
}

export default App;
