import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import CheckIcon from "@mui/icons-material/CheckOutlined";
import { FormControlLabel, Switch, TextField } from "@mui/material";
import { ConfigContext } from "../../../contexts/config";
import * as S from "../styles";
import PointsData from "../../../pages/NewSimulation/RouteSettings/PointsData";
import MapResume from "../MapResume";

export default function RouteResumeCard() {
  const { config } = React.useContext(ConfigContext);

  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: "max-content",
        // maxWidth: "800px",
        mx: "auto",
        overflow: "auto",
        resize: "horizontal",
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
        }}
      >
        <div style={{ display: "flex" }}>
          <S.InputWrapper>
            <TextField
              label="Horário do início da viagem"
              type="number"
              size="small"
              value={config?.routeSettings?.tripStartTime}
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <TextField
              label="Tolerância de chegada"
              type="number"
              size="small"
              value={config?.routeSettings?.toleranceArrival}
            />
          </S.InputWrapper>
        </div>

        <div style={{ display: "flex" }}>
          <S.InputWrapper>
            <TextField
              label="Tempo máximo em área indevida"
              type="number"
              size="small"
              value={config?.routeSettings?.timeAvoidMax}
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <TextField
              label="Raio considerável"
              type="number"
              size="small"
              value={config?.routeSettings?.rayConsiderable}
            />
          </S.InputWrapper>
        </div>

        <S.InputWrapper>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={config?.routeSettings.timeWindow}
              />
            }
            label="Janela de tempo"
            labelPlacement="start"
          />
        </S.InputWrapper>

        <div>
          <MapResume containerStyle={{ width: "100%", height: 500 }} />
        </div>

        <div style={{ maxWidth: 600 }}>
          <PointsData
            routeSettings={config?.routeSettings}
            timeWindow={config?.routeSettings?.timeWindow}
            disabled
          />
        </div>
      </CardContent>
    </Card>
  );
}
