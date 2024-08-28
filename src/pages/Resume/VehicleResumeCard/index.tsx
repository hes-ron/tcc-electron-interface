import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import CheckIcon from "@mui/icons-material/CheckOutlined";
import { TextField } from "@mui/material";
import { ConfigContext } from "../../../contexts/config";
import * as S from "../../../components/styles";

export default function VehicleResumeCard() {
  const { config } = React.useContext(ConfigContext);

  return (
    <Card
      variant="outlined"
      sx={{
        height: "fit-content",
        maxWidth: "100%",
        mx: "auto",
        overflow: "auto",
        resize: "horizontal",
      }}
    >
      <Typography
        level="title-lg"
        startDecorator={<CheckIcon color="success" />}
      >
        Caracteristicas do veiculo
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: "flex",
          flex: "flex-wrap",
        }}
      >
        <S.InputWrapper>
          <TextField
            label="Quantia carregada"
            value={config?.vehicleSettings.loadedCapacity}
            type="number"
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <TextField
            label="Tipo de veículo"
            value={config?.vehicleSettings.vehicleType}
            type="text"
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <TextField
            label="Velocidade máxima"
            value={config?.vehicleSettings.maximumSpeed}
            type="number"
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <TextField
            label="Velocidade mínima"
            value={config?.vehicleSettings.minimumSpeed}
            type="number"
          />
        </S.InputWrapper>
      </CardContent>
    </Card>
  );
}
