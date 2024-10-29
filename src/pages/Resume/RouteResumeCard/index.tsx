import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import CheckIcon from "@mui/icons-material/CheckOutlined";
import { FormControlLabel, Checkbox, TextField } from "@mui/material";
import { ConfigContext } from "../../../contexts/config";
import * as S from "../styles";
import PointsData from "../../../pages/NewSimulation/RouteSettings/PointsData";
import MapResume from "../MapResume";
import ZoneData from "../../../pages/NewSimulation/RouteSettings/ZoneData";

export default function RouteResumeCard() {
  const { config } = React.useContext(ConfigContext);

  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: "max-content",
        mx: "auto",
        overflow: "auto",
        resize: "horizontal",
        zIndex: 0,
      }}
    >
      <Typography
        level="title-lg"
        startDecorator={<CheckIcon color="success" />}
      >
        Caracteristicas de rota
      </Typography>
      <Divider inset="none" />

      <CardContent
        sx={{
          display: "flex",
          flex: "flex-wrap",
          marginTop: "8px",
        }}
      >
        <div style={{ display: "flex" }}>
          <S.InputWrapper>
            <TextField
              disabled
              label="Horário do início da viagem"
              type="number"
              size="small"
              value={config?.routeSettings?.tripStartTime}
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <TextField
              disabled
              label="Tolerância de chegada"
              type="number"
              size="small"
              value={config?.routeSettings?.toleranceArrival}
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <TextField
              disabled
              label="Tempo máximo em área indevida"
              type="number"
              size="small"
              value={config?.routeSettings?.timeAvoidMax}
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <TextField
              disabled
              label="Raio considerável"
              type="number"
              size="small"
              value={config?.routeSettings?.rayConsiderable}
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <FormControlLabel
              control={
                <Checkbox
                  disabled
                  color="primary"
                  checked={config?.routeSettings.timeWindow}
                />
              }
              label="Janela de tempo"
              labelPlacement="start"
            />
          </S.InputWrapper>
        </div>

        <div style={{ display: "flex" }}></div>

        <div>
          <MapResume containerStyle={{ width: "100%", height: 400 }} />
        </div>

        <div style={{}}>
          <PointsData
            routeSettings={config?.routeSettings}
            timeWindow={config?.routeSettings?.timeWindow}
            disabled
          />

          <ZoneData routeSettings={config?.routeSettings} disabled />
        </div>
      </CardContent>
    </Card>
  );
}
