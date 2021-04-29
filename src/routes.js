import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Controle from "./pages/Controle";
import Registros from "./pages/Registros";
import Login from "./pages/Login";

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
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
