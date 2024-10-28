import React, { useEffect } from "react";

import { IRouteSettings } from "../../../@types";

import { Tooltip, Divider } from "@mui/joy";
import InfoIcon from "@mui/icons-material/Info";

import { TextField, Switch, FormControlLabel } from "@mui/material";
import PointsData from "./PointsData";
import { ConfigContext } from "../../../contexts/config";
import ZoneData from "./ZoneData";
import { LocalizationProvider, TimeField } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { tooltipsTexts } from "../../../utils/tooltipsTexts";
import * as S from "./styles";

interface RouteSettingsProps {
  routeSettings: IRouteSettings;
  setRouteSettings: React.Dispatch<React.SetStateAction<IRouteSettings>>;
}

const RouteSettings = ({
  routeSettings,
  setRouteSettings,
}: RouteSettingsProps) => {
  const { config, setConfig } = React.useContext(ConfigContext);
  useEffect(() => {
    setConfig({
      ...config,
      routeSettings,
    });
  }, [routeSettings]);

  return (
    <S.Content>
      <S.RouteSettingsForm>
        <div>
          <S.InputItem>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimeField
                label="Horário de início da rota"
                defaultValue={dayjs(new Date())}
                format="HH:mm"
                ampm={false}
                onChange={(time) => {
                  setRouteSettings({
                    ...routeSettings,
                    tripStartTime: time.format("HH:mm"),
                  });
                }}
              />
            </LocalizationProvider>

            <Tooltip title={tooltipsTexts.horarioInicioRota}>
              <InfoIcon color="info" style={{ marginLeft: 16 }} />
            </Tooltip>
          </S.InputItem>

          <S.InputItem>
            <TextField
              label="Tolerância de chegada"
              type="number"
              size="small"
              value={routeSettings?.toleranceArrival}
              helperText="Em minutos"
              onChange={(event) => {
                setRouteSettings({
                  ...routeSettings,
                  toleranceArrival: parseInt(event.target.value),
                });
              }}
            />

            <Tooltip title={tooltipsTexts.toleranciaChegada}>
              <InfoIcon color="info" style={{ marginLeft: 16 }} />
            </Tooltip>
          </S.InputItem>

          <S.InputItem>
            <TextField
              label="Tempo máximo em área indevida"
              type="number"
              size="small"
              value={routeSettings?.timeAvoidMax}
              helperText="Em minutos"
              onChange={(event) => {
                setRouteSettings({
                  ...routeSettings,
                  timeAvoidMax: parseInt(event.target.value),
                });
              }}
            />

            <Tooltip title={tooltipsTexts.tempoMaximoAreaIndevida}>
              <InfoIcon color="info" style={{ marginLeft: 16 }} />
            </Tooltip>
          </S.InputItem>

          <S.InputItem>
            <TextField
              label="Raio considerável"
              type="number"
              size="small"
              value={routeSettings?.rayConsiderable}
              helperText="Em quilômetros"
              onChange={(event) => {
                setRouteSettings({
                  ...routeSettings,
                  rayConsiderable: parseInt(event.target.value),
                });
              }}
            />

            <Tooltip title={tooltipsTexts.raioConsideravel}>
              <InfoIcon color="info" style={{ marginLeft: 16 }} />
            </Tooltip>
          </S.InputItem>

          <S.InputItem>
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={routeSettings.timeWindow}
                  onChange={(event) => {
                    setRouteSettings({
                      ...routeSettings,
                      timeWindow: event.target.checked,
                    });
                  }}
                />
              }
              label="Habilitar janela de tempo"
              labelPlacement="top"
            />

            <Tooltip title={tooltipsTexts.habilitarJanelaTempo}>
              <InfoIcon color="info" style={{ marginLeft: 16 }} />
            </Tooltip>
          </S.InputItem>
        </div>

        <Divider orientation="vertical" />

        <div>
          <PointsData
            routeSettings={routeSettings}
            setRouteSettings={setRouteSettings}
            timeWindow={routeSettings?.timeWindow}
          />
          <ZoneData
            routeSettings={routeSettings}
            setRouteSettings={setRouteSettings}
          />
        </div>
      </S.RouteSettingsForm>
    </S.Content>
  );
};

export default RouteSettings;
