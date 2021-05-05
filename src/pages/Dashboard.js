import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FiCloud, FiTrendingUp, FiFilter } from "react-icons/fi";

export default function Dashboard() {
  const [system, setSystem] = useState(true); // TODO: Atualizar mudanças

  return (
    <>
      <Navbar page="dashboard" />
      <div className="container py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between mb-1">
          <h1>Informações em Tempo Real</h1>
          <h1>Sistema {system ? "Ativo" : "Desligado"}</h1>
        </div>
        <div className="mb-2 form-row">
          <div className="col-6 col-md-3 d-flex">
            <div className="card d-flex align-items-center mb-2 text-center w-100">
              <div className="d-flex flex-row mt-1">
                <FiCloud className="dash-sensor-icon mr-2" />
                <p className="dash-sensor-data ml-1 mb-2">43 ppm</p>
              </div>
              <p className="dash-sensor-name mb-1 flex-grow-1">
                CO2 no Ambiente
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex">
            <div className="card d-flex align-items-center mb-2 text-center w-100">
              <div className="d-flex flex-row justify-content-between mt-1">
                <FiTrendingUp className="dash-sensor-icon mr-2" />
                <p className="dash-sensor-data ml-1 mb-2">92%</p>
              </div>
              <p className="dash-sensor-name mb-1 flex-grow-1">
                Eficiência do Contator
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex">
            <div className="card d-flex align-items-center mb-2 text-center w-100">
              <div className="d-flex flex-row justify-content-between mt-1">
                <FiTrendingUp className="dash-sensor-icon mr-2" />
                <p className="dash-sensor-data ml-1 mb-2">86%</p>
              </div>
              <p className="dash-sensor-name mb-1 flex-grow-1">
                Eficiencia do Reator
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3 d-flex">
            <div className="card d-flex align-items-center mb-2 text-center w-100">
              <div className="d-flex flex-row justify-content-between mt-1">
                <FiFilter className="dash-sensor-icon mr-2" />
                <p className="dash-sensor-data ml-1 mb-2">??</p>
              </div>
              <p className="dash-sensor-name mb-1 flex-grow-1">
                Concentração Final de CO2
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
