import React from "react";
import Navbar from "../components/Navbar";
import { FiCloud, FiTrendingUp, FiFilter, FiAlertTriangle } from "react-icons/fi";

export default function Dashboard({ systemStatus }) {

  return (
    <>
      <Navbar page="dashboard" />
      <div className="container py-4">
        <div className="d-flex flex-column flex-md-row justify-content-between mb-1">
          <h1>Informações em Tempo Real</h1>
          <h1>Sistema {systemStatus ? "Ativo" : "Desligado"}</h1>
        </div>
        <div className="mb-2 form-row">
          {
            systemStatus
              ? (
                <>
                  <div className="col-6 col-md-3 d-flex">
                    <div className="card d-flex align-items-center mb-2 text-center w-100 px-4">
                      <div className="d-flex flex-row mt-1">
                        <FiCloud className="dash-sensor-icon mr-2" />
                        <p className="dash-sensor-data ml-1 mb-2">142 kg</p>
                      </div>
                      <p className="dash-sensor-name mb-1 flex-grow-1">
                        Entrada de CO2 no Sistema
                      </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 d-flex">
                    <div className="card d-flex align-items-center mb-2 text-center w-100 px-4">
                      <div className="d-flex flex-row justify-content-between mt-1">
                        <FiTrendingUp className="dash-sensor-icon mr-2" />
                        <p className="dash-sensor-data ml-1 mb-2">73%</p>
                      </div>
                      <p className="dash-sensor-name mb-1 flex-grow-1">
                        Eficiência do Sistema de Absorção de CO2
              </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 d-flex">
                    <div className="card d-flex align-items-center mb-2 text-center w-100 px-4">
                      <div className="d-flex flex-row justify-content-between mt-1">
                        <FiTrendingUp className="dash-sensor-icon mr-2" />
                        <p className="dash-sensor-data ml-1 mb-2">76%</p>
                      </div>
                      <p className="dash-sensor-name mb-1 flex-grow-1">
                        Eficiência do Reator
              </p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 d-flex">
                    <div className="card d-flex align-items-center mb-2 text-center w-100 px-4">
                      <div className="d-flex flex-row justify-content-between mt-1">
                        <FiFilter className="dash-sensor-icon mr-2" />
                        <p className="dash-sensor-data ml-1 mb-2">264 kg</p>
                      </div>
                      <p className="dash-sensor-name mb-1 flex-grow-1">
                        CaCO3 Produzido no Ciclo Atual
              </p>
                    </div>
                  </div>
                </>
              )
              : (
                <div className="col d-flex">
                  <div className="card d-flex align-items-center mb-2 text-center w-100 px-4">
                    <div className="d-flex flex-row mt-1">
                      <FiAlertTriangle className="dash-sensor-icon mr-2" />
                    </div>
                    <p className="lead">
                      Sistema desligado
              </p>
                  </div>
                </div>
              )
          }

        </div>
        <div className="mb-2 form-row">
          <div className="col col-md-5 d-flex">
            <div className="card d-flex mb-2 w-100 p-3">
              <p className="log-title ml-1">GRÁFICO DE PRODUÇÃO</p>
              <table className="table table-small mb-0">
                <thead>
                  <tr>
                    <th>CaCO3 Produzido</th>
                    <th>Início</th>
                    <th>Atividade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-medium">289 kg</td>
                    <td>30/03/2021 08:26:02</td>
                    <td>04:45:02</td>
                  </tr>
                  <tr>
                    <td className="text-medium">322 kg</td>
                    <td>29/03/2021 09:32:02</td>
                    <td>04:02:34</td>
                  </tr>
                  <tr>
                    <td className="text-medium">290 kg</td>
                    <td>28/03/2021 10:40:45</td>
                    <td>03:45:42</td>
                  </tr>
                  <tr>
                    <td className="text-medium">320 kg</td>
                    <td>27/03/2021 09:46:52</td>
                    <td>04:21:42</td>
                  </tr>
                  <tr>
                    <td className="text-medium">291 kg</td>
                    <td>26/03/2021 11:06:02</td>
                    <td>03:42:36</td>
                  </tr>
                  <tr>
                    <td className="text-medium">313 kg</td>
                    <td>25/03/2021 09:06:36</td>
                    <td>04:21:36</td>
                  </tr>
                  <tr>
                    <td className="text-medium">312 kg</td>
                    <td>24/03/2021 10:06:02</td>
                    <td>04:21:58</td>
                  </tr>
                  <tr>
                    <td className="text-medium">298 kg</td>
                    <td>23/03/2021 08:06:02</td>
                    <td>03:52:42</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col col-md-7 d-flex">
            <div className="card d-flex mb-2 w-100 p-3">
              <p className="log-title ml-1">ATIVIDADES RECENTES</p>
              <table className="table table-small mb-0">
                <thead>
                  <tr>
                    <th>Ação</th>
                    <th>Data/Horário</th>
                    <th>Autor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-medium">Ventilador desligado</td>
                    <td>28/03/2021 16:21:42</td>
                    <td>Igor Aragão</td>
                  </tr>
                  <tr>
                    <td className="text-medium">Sistema ligado</td>
                    <td>28/03/2021 10:04:24</td>
                    <td>Igor Aragão</td>
                  </tr>
                  <tr>
                    <td className="text-medium">Sistema desligado</td>
                    <td>27/03/2021 10:55:14</td>
                    <td>Igor Aragão</td>
                  </tr>
                  <tr>
                    <td className="text-medium">Ventilador ligado</td>
                    <td>27/03/2021 10:12:35</td>
                    <td>Igor Aragão</td>
                  </tr>
                  <tr>
                    <td className="text-medium">Ventilador desligado</td>
                    <td>27/03/2021 16:55:19</td>
                    <td>Igor Aragão</td>
                  </tr>
                  <tr>
                    <td className="text-medium">Sistema ligado</td>
                    <td>26/03/2021 12:24:26</td>
                    <td>Igor Aragão</td>
                  </tr>
                  <tr>
                    <td className="text-medium">Sistema desligado</td>
                    <td>26/03/2021 14:26:52</td>
                    <td>Igor Aragão</td>
                  </tr>
                  <tr>
                    <td className="text-medium">Sistema ligado</td>
                    <td>26/03/2021 10:06:02</td>
                    <td>Igor Aragão</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
