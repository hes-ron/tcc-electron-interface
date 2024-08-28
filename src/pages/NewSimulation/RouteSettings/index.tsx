import React, { useEffect } from "react";

import { IRouteSettings } from "../../../@types";

import { Tooltip, Divider } from "@mui/joy";
import InfoIcon from "@mui/icons-material/Info";

import { TextField, Switch, FormControlLabel } from "@mui/material";
import PointsData from "./PointsData";
import * as S from "./styles";
import { ConfigContext } from "../../../contexts/config";
import ZoneData from "./ZoneData";

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
            <TextField
              label="Horário do início da viagem"
              type="number"
              size="small"
              value={routeSettings?.tripStartTime}
              onChange={(event) => {
                setRouteSettings({
                  ...routeSettings,
                  tripStartTime: parseInt(event.target.value),
                });
              }}
            />

            <Tooltip title="Habilita a função de filtro por área indevida.">
              <InfoIcon color="info" style={{ marginLeft: 16 }} />
            </Tooltip>
          </S.InputItem>

          <S.InputItem>
            <TextField
              label="Tolerância de chegada"
              type="number"
              size="small"
              value={routeSettings?.toleranceArrival}
              onChange={(event) => {
                setRouteSettings({
                  ...routeSettings,
                  toleranceArrival: parseInt(event.target.value),
                });
              }}
            />

            <Tooltip title="Tolerância de tempo para aguardar até abrir o estabelecimento (minutos)">
              <InfoIcon color="info" style={{ marginLeft: 16 }} />
            </Tooltip>
          </S.InputItem>

          <S.InputItem>
            <TextField
              label="Tempo máximo em área indevida"
              type="number"
              size="small"
              value={routeSettings?.timeAvoidMax}
              onChange={(event) => {
                setRouteSettings({
                  ...routeSettings,
                  timeAvoidMax: parseInt(event.target.value),
                });
              }}
            />

            <Tooltip title="Tempo maximo para aguardar em area indevida">
              <InfoIcon color="info" style={{ marginLeft: 16 }} />
            </Tooltip>
          </S.InputItem>

          <S.InputItem>
            <TextField
              label="Raio considerável"
              type="number"
              size="small"
              value={routeSettings?.rayConsiderable}
              onChange={(event) => {
                setRouteSettings({
                  ...routeSettings,
                  rayConsiderable: parseInt(event.target.value),
                });
              }}
            />

            <Tooltip title="Distancia em raio para considerar testes em cada ponto">
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

            <Tooltip title="Habilita a janela de tempo">
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
