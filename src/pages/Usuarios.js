import React from "react";
import Navbar from "../components/Navbar";

export default function Usuarios() {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <div className="row mb-2">
          <div className="col-12 col-sm">
            <h1>Gerenciar Usuários</h1>
          </div>
          <div className="col-12 col-sm-auto">
            <button type="submit" className="btn btn-primary btn-title">
              Adicionar Usuário
            </button>
          </div>
        </div>
          <div className="mb-2">
            <div className="card card-table">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Usuário</th>
                    <th>Perfil</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Igor Aragão</td>
                    <td>igor_aragao</td>
                    <td>Administrador</td>
                    <td>icone</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </>
  );
}
