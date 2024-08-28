import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import FormLabel from "@mui/joy/FormLabel";
import Typography from "@mui/joy/Typography";
import CheckIcon from "@mui/icons-material/CheckOutlined";
import { FormControlLabel, Switch, TextField } from "@mui/material";
import { ConfigContext } from "../../../contexts/config";
import * as S from "../styles";

export default function GeneralResumeCard() {
  const { config } = React.useContext(ConfigContext);

  const handleGetPriority = () => {
    if (config?.generalSettings?.prioritySignalAvoid === 0) {
      return "Sombreamento";
    } else if (config?.generalSettings?.prioritySignalAvoid === 1) {
      return "Área indevida";
    } else if (config?.generalSettings?.prioritySignalAvoid === 2) {
      return "Sombreamento e área indevida";
    }
  };

  const handleGetOperator = () => {
    if (config?.generalSettings?.operators?.opClaro) {
      return "Claro";
    }
    if (config?.generalSettings?.operators?.opOi) {
      return "Oi";
    }
    if (config?.generalSettings?.operators?.opTim) {
      return "Tim";
    }
    if (config?.generalSettings?.operators?.opVivo) {
      return "Vivo";
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        height: "fit-content",
        maxWidth: "100%",
        mx: "auto",
        overflow: "auto",
        resize: "horizontal",
        marginBottom: "16px",
      }}
    >
      <Typography
        level="title-lg"
        startDecorator={<CheckIcon color="success" />}
      >
        Caracteristicas gerais
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: "flex",
          flex: "flex-wrap",
        }}
      >
        <S.InputWrapper>
          <FormLabel>Filtro por sombreamento</FormLabel>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={config?.generalSettings?.activateSignal}
              />
            }
            label=""
            labelPlacement="start"
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <FormLabel>Filtro por área indevida</FormLabel>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={config?.generalSettings?.activeAvoid}
              />
            }
            label=""
            labelPlacement="start"
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <FormLabel>Filtro por chuva</FormLabel>
          <FormControlLabel
            control={
              <Switch color="primary" checked={config?.generalSettings?.rain} />
            }
            label=""
            labelPlacement="start"
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <TextField
            label="Prioridade de sinal"
            value={handleGetPriority()}
            type="text"
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <TextField
            label="Operadora"
            value={handleGetOperator()}
            type="text"
          />
        </S.InputWrapper>
      </CardContent>
    </Card>
  );
}
