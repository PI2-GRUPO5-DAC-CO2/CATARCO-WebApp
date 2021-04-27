import React from "react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar page="dashboard"/>
      <div className="container py-4">
        <h1>Dashboard</h1>
      </div>
    </>
  );
}
