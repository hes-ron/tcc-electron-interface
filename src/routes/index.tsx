import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NewSimulation from "../pages/NewSimulation";
import Settings from "../pages/Settings";
import Resume from "../pages/Resume";

const MyRoute = () => {
  return (
    <MemoryRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewSimulation />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/configuracao-atual" element={<Resume />} />
      </Routes>
    </MemoryRouter>
  );
};

export default MyRoute;
