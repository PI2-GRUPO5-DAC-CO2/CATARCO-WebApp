import React from "react";
import Navbar from "../components/Navbar";

export default function Controle() {
  return (
    <>
      <Navbar page="controle" />
      <div className="container py-4">
        <div className="mb-4" id="system">
          <div className="mb-1">
            <h1 className="mb-1">Sistema</h1>
            <p className="lead">
              Atualmente o sistema está <b>ativo</b>.
            </p>
          </div>
          <div className="form-row">
            <div className="col-12 col-sm-auto">
              <button
                className="btn btn-lg btn-primary btn-block mb-2 mr-2"
                onClick={() => null}
              >
                Pausar sistema
              </button>
            </div>
            <div className="col-12 col-sm-auto">
              <button
                className="btn btn-lg btn-danger btn-block mb-2 mr-2"
                onClick={() => null}
              >
                Desligar sistema
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4" id="controllers">
          <div className="mb-2">
            <h1 className="mb-1">Controladores</h1>
          </div>
          <div className="mb-2">
            <div className="card card-table">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Controlador</th>
                    <th className="w-25">Local</th>
                    <th className="w-20">Status</th>
                    <th className="w-15">Controle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Exaustor</td>
                    <td>-</td>
                    <td>Ativo</td>
                    <td>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Exaustor</td>
                    <td>-</td>
                    <td>Ativo</td>
                    <td>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Exaustor</td>
                    <td>-</td>
                    <td>Ativo</td>
                    <td>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Exaustor</td>
                    <td>-</td>
                    <td>Ativo</td>
                    <td>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch1"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Exaustor</td>
                    <td>-</td>
                    <td>Ativo</td>
                    <td>
                      <div className="custom-control custom-switch">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customSwitch1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customSwitch1"
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
                    <th>Controlador</th>
                    <th className="w-25">Local</th>
                    <th className="w-20">Valor</th>
                    <th className="w-15">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sensor CO2</td>
                    <td>Externo</td>
                    <td>32 ppm</td>
                    <td>Ativo</td>
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
