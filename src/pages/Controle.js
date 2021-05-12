import React, { useState, useEffect } from "react";
import { updateActuatorsData } from "../services/api";
import Navbar from "../components/Navbar";

export default function Controle({ apiData, systemManager }) {
  const { actuatorsData, sensorsData } = apiData;
  const { systemStatus, setSystemStatus } = systemManager;
  const [sensors, setSensors] = useState(sensorsData)
  const [actuators, setActuators] = useState(actuatorsData)

  const isSensorsEmpty = sensorsData.length === 0;

  useEffect(() => {
    const interval = systemStatus ? setInterval(() => updateStatus(), 2500) : null;
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function updateStatus() {
    setSensors(sensorsData);
    setActuators(actuatorsData);
  }

  async function handleFanStatus(value) {
    await updateActuatorsData(2, value)
      .catch(e => console.log(e))
  }

  return (
    <>
      <Navbar page="controle" />
      <div className="container py-4">
        <div className="mb-4" id="system">
          <div className="mb-1">
            <h1 className="mb-1">Sistema</h1>
            <p className="lead">Atualmente o sistema está <b>{systemStatus ? "ativo" : "desligado"}</b>.</p>
          </div>
          <div className="form-row">
            <div className="col-12 col-sm-auto">
              <button
                className={`btn btn-lg ${systemStatus ? "btn-danger" : "btn-success"} btn-block mb-2 mr-2`}
                onClick={() => setSystemStatus(!systemStatus)}
              >
                {systemStatus ? "Desligar sistema" : "Ligar sistema"}
              </button>
            </div>
          </div>
        </div>
        {
          systemStatus
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
                          <td>{actuators[1]?.value ? "Ativo" : "Desligado"}</td>
                          <td>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                onChange={() => handleFanStatus(!actuators[1]?.value)}
                                checked={actuators[1]?.value}
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
                        {
                          !isSensorsEmpty
                            ? (
                              <>
                                <tr id={1}>
                                  <td>CO2</td>
                                  <td>Meio Externo</td>
                                  <td>{sensors[0].value.toFixed(1)} ppm</td>
                                  <td>Ativo</td>
                                </tr>
                                <tr id={2}>
                                  <td>Umidade</td>
                                  <td>Meio Externo</td>
                                  <td>{sensors[1].value}%</td>
                                  <td>Ativo</td>
                                </tr>
                                <tr id={3}>
                                  <td>Nivel Alto</td>
                                  <td>Reservatório Na2CO3</td>
                                  <td>{sensors[2].value ? "Positivo" : "Negativo"}</td>
                                  <td>Ativo</td>
                                </tr>
                                <tr id={4}>
                                  <td>Nivel Baixo</td>
                                  <td>Reservatório Na2CO3</td>
                                  <td>{sensors[3].value ? "Positivo" : "Negativo"}</td>
                                  <td>Ativo</td>
                                </tr>
                                <tr id={5}>
                                  <td>Rotação</td>
                                  <td>Motor 1 - Ventilador</td>
                                  <td>{sensors[4].value} RPM</td>
                                  <td>Ativo</td>
                                </tr>
                                <tr id={6}>
                                  <td>Rotação</td>
                                  <td>Motor 2 - Ventilador</td>
                                  <td>{sensors[5].value} RPM</td>
                                  <td>Ativo</td>
                                </tr>
                                <tr id={7}>
                                  <td>Nivel Baixo</td>
                                  <td>Reservatório Ca(OH)2</td>
                                  <td>{sensors[6].value ? "Positivo" : "Negativo"}</td>
                                  <td>Ativo</td>
                                </tr>
                                <tr id={8}>
                                  <td>Pressão</td>
                                  <td>Reator</td>
                                  <td>{sensors[7].value.toFixed(1)} Pa</td>
                                  <td>Ativo</td>
                                </tr>
                                <tr id={9}>
                                  <td>Temperatura</td>
                                  <td>Reator</td>
                                  <td>{sensors[8].value.toFixed(1)} ºC</td>
                                  <td>Ativo</td>
                                </tr>
                                <tr id={10}>
                                  <td>Temperatura</td>
                                  <td>Reservatório NaOH</td>
                                  <td>{sensors[9].value.toFixed(1)} ºC</td>
                                  <td>Ativo</td>
                                </tr>
                                <tr id={11}>
                                  <td>Nivel Alto</td>
                                  <td>Reservatório NaOH</td>
                                  <td>{sensors[10].value ? "Positivo" : "Negativo"}</td>
                                  <td>Ativo</td>
                                </tr>
                                <tr id={12}>
                                  <td>Nivel Baixo</td>
                                  <td>Reservatório NaOH</td>
                                  <td>{sensors[11].value ? "Positivo" : "Negativo"}</td>
                                  <td>Ativo</td>
                                </tr>
                                <tr id={13}>
                                  <td>Nivel Alto</td>
                                  <td>Reservatório CaCO3</td>
                                  <td>{sensors[12].value ? "Positivo" : "Negativo"}</td>
                                  <td>Ativo</td>
                                </tr>
                              </>
                            )
                            : (
                              <tr>
                                <td>Carregando...</td>
                              </tr>
                            )
                        }
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
