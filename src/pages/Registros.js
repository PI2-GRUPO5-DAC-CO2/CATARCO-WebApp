import React from "react";
import Navbar from "../components/Navbar";

export default function Registros() {
  return (
    <>
      <Navbar page="registros" />
      <div className="container py-4">
        <div className="row mb-2">
          <div className="col-12 col-sm">
            <h1>Histórico de Registros</h1>
          </div>
        </div>
      </div>
    </>
  );
}
