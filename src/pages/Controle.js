import React, { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Controle() {
  // const [sensorsData, setSensorsData] = useState([]);
  const [system, setSystem] = useState(true);
  const [exaustor, setExaustor] = useState(true);

  // const sensorsDataStatus = sensorsData.length === 0;

  useEffect(() => {
    localStorage.setItem("system", system);
    const interval = system ? setInterval(() => getData(), 5000) : null;

    return () => clearInterval(interval);
  }, [system])

  // TODO: Listar sensores
  async function getData() {
    await api.get("sensors")
      .then((response) => {
        console.log(response.data);
        // setSensorsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <Navbar page="controle" />
      <div className="container py-4">
        <div className="mb-4" id="system">
          <div className="mb-1">
            <h1 className="mb-1">Sistema</h1>
            <p className="lead">Atualmente o sistema está <b>{system ? "ativo" : "desligado"}</b>.</p>
          </div>
          <div className="form-row">
            <div className="col-12 col-sm-auto">
              <button
                className={`btn btn-lg ${system ? "btn-danger" : "btn-success"} btn-block mb-2 mr-2`}
                onClick={() => setSystem(!system)}
              >
                {system ? "Desligar sistema" : "Ligar sistema"}
              </button>
            </div>
          </div>
        </div>
        {
          system
            ? (<>
              <div className="mb-4" id="controllers">
                <div className="mb-2">
                  <h1 className="mb-1">Atuadores</h1>
                </div>
                <div className="mb-2">
                  <div className="card card-table">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th>Atuador</th>
                          <th className="w-20">Status</th>
                          <th className="w-15">Controle</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Exaustor</td>
                          <td>{exaustor ? "Ativo" : "Desligado"}</td>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                onChange={() => setExaustor(!exaustor)}
                                checked={exaustor}
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mb-4" id="sensors">
                <div className="mb-2">
                  <h1 className="mb-1">Sensores</h1>
                </div>
                <div className="mb-2">
                  <div className="card card-table">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th>Sensor</th>
                          <th className="w-25">Local</th>
                          <th className="w-20">Valor</th>
                          <th className="w-15">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>CO2</td>
                          <td>Meio Externo</td>
                          <td>32 ppm</td>
                          <td>Ativo</td>
                        </tr>
                        <tr>
                          <td>Umidade</td>
                          <td>Meio Externo</td>
                          <td>22%</td>
                          <td>Ativo</td>
                        </tr>
                        <tr>
                          <td>Nivel Alto</td>
                          <td>Reservatório Na2CO3</td>
                          <td>Negativo</td>
                          <td>Ativo</td>
                        </tr>
                        <tr>
                          <td>Nivel Baixo</td>
                          <td>Reservatório Na2CO3</td>
                          <td>Positivo</td>
                          <td>Ativo</td>
                        </tr>
                        <tr>
                          <td>Rotação</td>
                          <td>Motor 1 - Ventilador</td>
                          <td>4000 RPM</td>
                          <td>Ativo</td>
                        </tr>
                        <tr>
                          <td>Rotação</td>
                          <td>Motor 2 - Ventilador</td>
                          <td>4000 RPM</td>
                          <td>Ativo</td>
                        </tr>
                        <tr>
                          <td>Nivel Baixo</td>
                          <td>Reservatório Ca(OH)2</td>
                          <td>Positivo</td>
                          <td>Ativo</td>
                        </tr>
                        <tr>
                          <td>Pressão</td>
                          <td>Reator</td>
                          <td>18.2 Pa</td>
                          <td>Ativo</td>
                        </tr>
                        <tr>
                          <td>Temperatura</td>
                          <td>Reator</td>
                          <td>28 ºC</td>
                          <td>Ativo</td>
                        </tr>
                        <tr>
                          <td>Temperatura</td>
                          <td>Reservatório NaOH</td>
                          <td>29 ºC</td>
                          <td>Ativo</td>
                        </tr>
                        <tr>
                          <td>Nivel Alto</td>
                          <td>Reservatório NaOH</td>
                          <td>Negativo</td>
                          <td>Ativo</td>
                        </tr>
                        <tr>
                          <td>Nivel Baixo</td>
                          <td>Reservatório NaOH</td>
                          <td>Positivo</td>
                          <td>Ativo</td>
                        </tr>
                        <tr>
                          <td>Nivel Alto</td>
                          <td>Reservatório CaCO3</td>
                          <td>Negativo</td>
                          <td>Ativo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>)
            : null
        }
      </div>
    </>
  );
}
