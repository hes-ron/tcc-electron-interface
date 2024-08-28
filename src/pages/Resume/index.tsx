import React from "react";
import DefaultPage from "../DefaultPage";
import BreadCrumbs from "../../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import GeneralResumeCard from "./GeneralResumeCard";
import RouteResumeCard from "./RouteResumeCard";
import VehicleResumeCard from "./VehicleResumeCard";
import * as S from "./styles";

const Resume = () => {
  const navigate = useNavigate();

  const breadCrumbs = [
    {
      label: "Início",
      disabled: false,
      onClick: () => navigate("/"),
    },
    { label: "Configuração atual", disabled: true },
  ];

  return (
    <DefaultPage>
      <BreadCrumbs breadCrumbs={breadCrumbs} />

      <S.CardsWrapper>
        <div
          style={{
            width: "33%",
          }}
        >
          <GeneralResumeCard />
          <VehicleResumeCard />
        </div>
        <div
          style={{
            width: "66%",
          }}
        >
          <RouteResumeCard />
        </div>
      </S.CardsWrapper>
    </DefaultPage>
  );
};

export default Resume;
