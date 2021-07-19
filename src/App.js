import React from "react";
import { CompHeader } from "./componentes/comp-header";
import { CompNav } from "./componentes/comp-navigation";
import { CompMain } from "./componentes/comp-mainContent";
import "./App.css";

const App = () => (
  <div id="wrapper">
    <CompHeader />
    <CompNav />
    <CompMain />
  </div>
);
export default App;
