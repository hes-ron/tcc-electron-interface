import React from "react";
import DefaultPage from "../DefaultPage";
import BreadCrumbs from "../../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";
import GeneralResumeCard from "./GeneralResumeCard";
import RouteResumeCard from "./RouteResumeCard";
import VehicleResumeCard from "./VehicleResumeCard";
import * as S from "./styles";
import { Button } from "@mui/joy";
import { SidebarContext } from "../../contexts/sidebar";

const Resume = () => {
  const navigate = useNavigate();
  const { sideBarOpen } = React.useContext(SidebarContext);

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

      <S.FixedOptions>
        <div
          style={
            sideBarOpen
              ? { width: "100%", marginLeft: "104px" }
              : { width: "100%", marginLeft: "274px" }
          }
        >
          <Button color="success" fullWidth onClick={() => navigate("/result")}>
            Visualizar resultado da rota
          </Button>
        </div>
      </S.FixedOptions>
    </DefaultPage>
  );
};

export default Resume;
