import React from "react";
import "./style.css";

import spidermanImage from "./assets/spidermanImage.png";

const App = () => {
  return (
    <div>
      <h1 className="h1">Hello Anchal</h1>
      <img src={spidermanImage} alt="SpiderMan" />
    </div>
  );
};

export default App;
