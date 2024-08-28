import React from "react";

import { TextField, Typography } from "@mui/material";
import { IVehicleSettings } from "../../../@types";
import { Container, InputWrapper } from "../../../components/styles";
import VehicleTable from "./VehicleTable";
import * as S from "./styles";

interface IVehicleSettingsProps {
  vehicleSettings: IVehicleSettings;
  setVehicleSettings: React.Dispatch<React.SetStateAction<IVehicleSettings>>;
}

export const VehicleSettings = ({
  vehicleSettings,
  setVehicleSettings,
}: IVehicleSettingsProps) => {
  return (
    <Container>
      <S.InputWrapper>
        <TextField
          label="Quantia carregada"
          value={vehicleSettings.loadedCapacity}
          type="number"
          onChange={(e) => {
            setVehicleSettings({
              ...vehicleSettings,
              loadedCapacity: parseInt(e.target.value),
            });
          }}
        />

        <TextField
          label="Velocidade máxima"
          value={vehicleSettings.maximumSpeed}
          type="number"
          onChange={(e) => {
            setVehicleSettings({
              ...vehicleSettings,
              maximumSpeed: parseInt(e.target.value),
            });
          }}
        />

        <TextField
          label="Velocidade mínima"
          value={vehicleSettings.minimumSpeed}
          type="number"
          onChange={(e) => {
            setVehicleSettings({
              ...vehicleSettings,
              minimumSpeed: parseInt(e.target.value),
            });
          }}
        />
      </S.InputWrapper>

      <VehicleTable
        vehicleSettings={vehicleSettings}
        setVehicleSettings={setVehicleSettings}
      />
    </Container>
  );
};

export default VehicleSettings;
