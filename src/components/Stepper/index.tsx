import * as React from "react";
import { Box, Button, Modal, Stepper as ST, Typography } from "@mui/joy";
import Step from "@mui/joy/Step";
import StepButton from "@mui/joy/StepButton";
import StepIndicator from "@mui/joy/StepIndicator";
import Check from "@mui/icons-material/Check";

import VehicleCharacteristics from "../../pages/NewSimulation/VehicleSettings";
import { ConfigContext } from "../../contexts/config";
import RouteSettings from "../../pages/NewSimulation/RouteSettings";
import GeneralSettings from "../../pages/NewSimulation/GeneralSettings";

import {
  IGeneralSettings,
  IRouteSettings,
  IVehicleSettings,
} from "../../@types";
import Map from "../Map";
import { defaultConfig } from "../../utils";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const steps = [
  "Configurações gerais",
  "Configurações de rota",
  "Configurações de veículo",
];

export default function Stepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { config, setConfig } = React.useContext(ConfigContext);
  const [generalSettings, setGeneralSettings] = React.useState(
    defaultConfig?.generalSettings as IGeneralSettings
  );
  const [routeSettings, setRouteSettings] = React.useState(
    defaultConfig?.routeSettings as IRouteSettings
  );
  const [vehicleSettings, setVehicleSettings] = React.useState(
    defaultConfig?.vehicleSettings as IVehicleSettings
  );

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#000",
    border: "2px solid #000",
    boxShadow: 24,
    color: "#fff",
    p: 4,
    "> p": {
      color: "#fff",
    },
  };

  const handleSaveSettings = () => {
    setConfig({
      ...config,
      generalSettings,
      routeSettings,
      vehicleSettings,
    });
  };

  const handleBack = () => {
    handleSaveSettings();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    handleSaveSettings();

    if (activeStep === 2) {
      navigate("/configuracao-atual");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const stepContent = [
    <GeneralSettings
      generalSettings={generalSettings}
      setGeneralSettings={setGeneralSettings}
    />,
    <RouteSettings
      routeSettings={routeSettings}
      setRouteSettings={setRouteSettings}
    />,
    <VehicleCharacteristics
      vehicleSettings={vehicleSettings}
      setVehicleSettings={setVehicleSettings}
    />,
  ];

  const handleResetStep = () => {
    switch (activeStep) {
      case 0:
        setGeneralSettings(defaultConfig?.generalSettings as IGeneralSettings);
        break;
      case 1:
        setRouteSettings(defaultConfig?.routeSettings as IRouteSettings);
        break;
      case 2:
        setVehicleSettings(defaultConfig?.vehicleSettings as IVehicleSettings);
        break;
    }

    setOpen(false);
  };

  return (
    <>
      <ST sx={{ width: "100%" }}>
        {steps.map((step, index) => (
          <Step
            key={step}
            indicator={
              <StepIndicator
                variant={activeStep <= index ? "soft" : "solid"}
                color={activeStep < index ? "neutral" : "primary"}
              >
                {activeStep <= index ? index + 1 : <Check />}
              </StepIndicator>
            }
            sx={{
              "&::after": {
                ...(activeStep > index &&
                  index !== 2 && { bgcolor: "primary.solidBg" }),
              },
            }}
          >
            <StepButton onClick={() => setActiveStep(index)}>{step}</StepButton>
          </Step>
        ))}
      </ST>

      <S.FormsWrapper>
        <Map
          containerStyle={{
            height: "400px",
          }}
          setRouteSettings={setRouteSettings}
          routeSettings={routeSettings}
        />

        {stepContent[activeStep]}

        <S.ButtonsWrapper>
          <div>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Voltar
            </Button>
            <Button onClick={() => setOpen(true)} style={{ marginLeft: 8 }}>
              Limpar campos
            </Button>
          </div>

          <Button onClick={handleNext}>
            {activeStep === 2 ? "Ver resumo" : "Continuar"}
          </Button>
        </S.ButtonsWrapper>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography>Tem certeza?</Typography>
            <Typography>
              Essa ação irá limpar todas as configurações feitas até o momento
              nessa etapa.
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 16,
              }}
            >
              <Button onClick={() => setOpen(false)}>Cancelar</Button>
              <Button onClick={handleResetStep}>Limpar campos</Button>
            </div>
          </Box>
        </Modal>
      </S.FormsWrapper>
    </>
  );
}