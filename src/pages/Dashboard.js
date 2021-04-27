import React from "react";
import Navbar from "../components/Navbar";
import { FiActivity } from "react-icons/fi";

export default function Dashboard() {
  return (
    <>
      <Navbar page="dashboard" />
      <div className="container py-4">
        <div className="mb-2 d-flex flex-column flex-md-row justify-content-between">
          <h1>Informações em Tempo Real</h1>
          <h1>Estado do Sistema: Ativo</h1>
        </div>
        <div className="mb-2 form-row">
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card d-flex align-items-center mb-2">
              <FiActivity className="dash-sensor-icon mb-2"/>
              <p className="dash-sensor-data mb-1">43ºC</p>
              <p className="dash-sensor-name mb-1">Temperatura do Reator</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card d-flex align-items-center mb-2">
              <FiActivity className="dash-sensor-icon mb-2"/>
              <p className="dash-sensor-data mb-1">43ºC</p>
              <p className="dash-sensor-name mb-1">Temperatura do Reator</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card d-flex align-items-center mb-2">
              <FiActivity className="dash-sensor-icon mb-2"/>
              <p className="dash-sensor-data mb-1">43ºC</p>
              <p className="dash-sensor-name mb-1">Temperatura do Reator</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card d-flex align-items-center mb-2">
              <FiActivity className="dash-sensor-icon mb-2"/>
              <p className="dash-sensor-data mb-1">43ºC</p>
              <p className="dash-sensor-name mb-1">Temperatura do Reator</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card d-flex align-items-center mb-2">
              <FiActivity className="dash-sensor-icon mb-2"/>
              <p className="dash-sensor-data mb-1">43ºC</p>
              <p className="dash-sensor-name mb-1">Temperatura do Reator</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card d-flex align-items-center mb-2">
              <FiActivity className="dash-sensor-icon mb-2"/>
              <p className="dash-sensor-data mb-1">43ºC</p>
              <p className="dash-sensor-name mb-1">Temperatura do Reator</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card d-flex align-items-center mb-2">
              <FiActivity className="dash-sensor-icon mb-2"/>
              <p className="dash-sensor-data mb-1">43ºC</p>
              <p className="dash-sensor-name mb-1">Temperatura do Reator</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card d-flex align-items-center mb-2">
              <FiActivity className="dash-sensor-icon mb-2"/>
              <p className="dash-sensor-data mb-1">43ºC</p>
              <p className="dash-sensor-name mb-1">Temperatura do Reator</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card d-flex align-items-center mb-2">
              <FiActivity className="dash-sensor-icon mb-2"/>
              <p className="dash-sensor-data mb-1">43ºC</p>
              <p className="dash-sensor-name mb-1">Temperatura do Reator</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card d-flex align-items-center mb-2">
              <FiActivity className="dash-sensor-icon mb-2"/>
              <p className="dash-sensor-data mb-1">43ºC</p>
              <p className="dash-sensor-name mb-1">Temperatura do Reator</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card d-flex align-items-center mb-2">
              <FiActivity className="dash-sensor-icon mb-2"/>
              <p className="dash-sensor-data mb-1">43ºC</p>
              <p className="dash-sensor-name mb-1">Temperatura do Reator</p>
            </div>
          </div>
          <div className="col-12 col-sm-4 col-md-3 col-lg-3 col-xl-2">
            <div className="card d-flex align-items-center mb-2">
              <FiActivity className="dash-sensor-icon mb-2"/>
              <p className="dash-sensor-data mb-1">43ºC</p>
              <p className="dash-sensor-name mb-1">Temperatura do Reator</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
