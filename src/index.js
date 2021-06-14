import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import InteractionContainer from "./InteractionContainer";

const App = () => {
  return <InteractionContainer />;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
