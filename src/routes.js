import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { getSensorsDataFromAPI } from "./services/api";
import Dashboard from "./pages/Dashboard";
import Controle from "./pages/Controle";
import Registros from "./pages/Registros";
import Usuarios from "./pages/Usuarios";
import Login from "./pages/Login";

export default function Routes() {
  const [systemStatus, setSystemStatus] = useState(true);
  const [fanStatus, setFanStatus] = useState(true);
  const [sensorsData, setSensorsData] = useState([]);

  useEffect(() => {
    function handleResize() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = systemStatus ? setInterval(() => getSensorsData(), 4000) : null;
    return () => clearInterval(interval);
  }, [systemStatus])

  const actuatorData = {
    systemStatus: systemStatus,
    setSystemStatus: setSystemStatus,
    fanStatus: fanStatus,
    setFanStatus: setFanStatus
  }

  async function getSensorsData() {
    await getSensorsDataFromAPI
      .then((response) => {
        setSensorsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={
          () => <Dashboard actuatorData={{ ...actuatorData }} />
        } />
        <Route path="/controle" exact component={
          () => <Controle actuatorData={{ ...actuatorData }} sensorsData={sensorsData} />
        } />
        <Route path="/registros" exact component={Registros} />
        <Route path="/usuarios" exact component={Usuarios} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
