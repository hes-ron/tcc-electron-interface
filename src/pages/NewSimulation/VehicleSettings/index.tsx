import React, { useState } from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { IVehicles, IVehicleSettings } from "../../../@types";
import { Container } from "../../../components/styles";
import VehicleTable from "./VehicleTable";
import { ConfigContext } from "../../../contexts/config";
import { Tooltip } from "@mui/joy";
import { tooltipsTexts } from "../../../utils/tooltipsTexts";
import InfoIcon from "@mui/icons-material/Info";
import * as S from "./styles";

interface IVehicleSettingsProps {
  vehicleSettings: IVehicleSettings;
  setVehicleSettings: React.Dispatch<React.SetStateAction<IVehicleSettings>>;
}

export const VehicleSettings = ({
  vehicleSettings,
  setVehicleSettings,
}: IVehicleSettingsProps) => {
  const { config } = React.useContext(ConfigContext);
  const [vehicleType, setVehicleType] = useState("");

  const handleVehicleChange = (vehicleType: string) => {
    setVehicleType(vehicleType);
    setVehicleSettings({
      ...vehicleSettings,
      vehicleType: vehicleType,
    });
  };

  return (
    <Container>
      <div style={{ display: "flex", gap: 32, paddingBottom: "100px" }}>
        <div style={{ width: "50%" }}>
          <VehicleTable
            vehicleSettings={vehicleSettings}
            setVehicleSettings={setVehicleSettings}
          />
        </div>

        <div>
          <S.InputWrapper>
            <div>
              <TextField
                label="Quantia carregada"
                value={vehicleSettings.loadedCapacity}
                type="number"
                helperText="Em kilogramas"
                onChange={(e) => {
                  setVehicleSettings({
                    ...vehicleSettings,
                    loadedCapacity: parseInt(e.target.value),
                  });
                }}
              />
              <Tooltip title={tooltipsTexts.quantiaCarregada}>
                <InfoIcon color="info" style={{ marginLeft: 16 }} />
              </Tooltip>
            </div>

            <div>
              <TextField
                label="Velocidade máxima"
                value={vehicleSettings.maximumSpeed}
                type="number"
                helperText="Em quilômetros por hora"
                onChange={(e) => {
                  setVehicleSettings({
                    ...vehicleSettings,
                    maximumSpeed: parseInt(e.target.value),
                  });
                }}
              />
              <Tooltip title={tooltipsTexts.velocidadeMaxima}>
                <InfoIcon color="info" style={{ marginLeft: 16 }} />
              </Tooltip>
            </div>

            <div>
              <TextField
                label="Velocidade mínima"
                value={vehicleSettings.minimumSpeed}
                type="number"
                helperText="Em quilometros por hora"
                onChange={(e) => {
                  setVehicleSettings({
                    ...vehicleSettings,
                    minimumSpeed: parseInt(e.target.value),
                  });
                }}
              />
              <Tooltip title={tooltipsTexts.velocidadeMinima}>
                <InfoIcon color="info" style={{ marginLeft: 16 }} />
              </Tooltip>
            </div>
          </S.InputWrapper>

          <FormControl style={{ width: "100%" }}>
            <InputLabel id="vehicleTypeLabel">Tipo do veículo</InputLabel>
            <div style={{ width: "100%", display: "flex" }}>
              <Select
                style={{ width: "100%" }}
                labelId="vehicleTypeLabel"
                id="vehicleType"
                defaultValue={config?.vehicles[0]?.vehicleType}
                value={
                  vehicleType ? vehicleType : config?.vehicles[0].vehicleType
                }
                label="Tipo do veículo"
                onChange={(event) => handleVehicleChange(event.target.value)}
              >
                {config.vehicles.map((vehicle: IVehicles) => (
                  <MenuItem value={vehicle.vehicleType}>
                    {vehicle.vehicleType}
                  </MenuItem>
                ))}
              </Select>
              <Tooltip title={tooltipsTexts.tipoVeiculo}>
                <InfoIcon color="info" style={{ marginLeft: 16 }} />
              </Tooltip>
            </div>
          </FormControl>
        </div>
      </div>
    </Container>
  );
};

export default VehicleSettings;
