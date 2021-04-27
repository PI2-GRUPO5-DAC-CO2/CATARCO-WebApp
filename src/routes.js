import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Controle from "./pages/Controle";
import Registros from "./pages/Registros";

export default function Routes() {
  useEffect(() => {
    function handleResize() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/controle" exact component={Controle} />
        <Route path="/registros" exact component={Registros} />
      </Switch>
    </BrowserRouter>
  );
}
