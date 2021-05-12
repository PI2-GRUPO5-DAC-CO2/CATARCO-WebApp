import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { getSensorsData, getActuatorsData } from "./services/api";
import Dashboard from "./pages/Dashboard";
import Controle from "./pages/Controle";
import Registros from "./pages/Registros";
import Usuarios from "./pages/Usuarios";
import Login from "./pages/Login";

export default function Routes() {
  const [systemStatus, setSystemStatus] = useState(true);

  const [sensorsData, setSensorsData] = useState([]);
  const [actuatorsData, setActuatorsData] = useState([]);

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
    const interval = setInterval(() => getDataFromAPI(), 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getDataFromAPI() {
    await getSensorsData
      .then((response) => {
        setSensorsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })

    await getActuatorsData
      .then((response) => {
        setActuatorsData(response.data);
        updateSystemStatus(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function updateSystemStatus(data){
    const systemData = data[0];
    console.log(systemData.value);
  }

  const apiData = {
    actuatorsData: actuatorsData,
    sensorsData: sensorsData
  }

  const systemManager = {
    systemStatus: systemStatus,
    setSystemStatus: setSystemStatus
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={
          () => <Dashboard systemStatus={systemStatus} />
        } />
        <Route path="/controle" exact component={
          () => <Controle apiData={{...apiData}} systemManager={{...systemManager}} />
        } />
        <Route path="/registros" exact component={Registros} />
        <Route path="/usuarios" exact component={Usuarios} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
