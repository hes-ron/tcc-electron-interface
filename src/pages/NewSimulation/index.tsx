import React from "react";
import DefaultPage from "../DefaultPage";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../../components/Breadcrumbs";

import Stepper from "../../components/Stepper";
import * as S from "./styles";

const NewSimulation = () => {
  const navigate = useNavigate();

  const breadCrumbs = [
    {
      label: "Início",
      disabled: false,
      onClick: () => navigate("/"),
    },
    { label: "Nova simulação", disabled: true },
  ];

  return (
    <DefaultPage>
      <BreadCrumbs breadCrumbs={breadCrumbs} />

      <Stepper />
    </DefaultPage>
  );
};

export default NewSimulation;
