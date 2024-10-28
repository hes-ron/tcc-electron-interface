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
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <S.InputWrapper>
            <TextField
              disabled
              label="Quantia carregada"
              value={config?.vehicleSettings.loadedCapacity}
              type="number"
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <TextField
              disabled
              label="Tipo de veículo"
              value={config?.vehicleSettings.vehicleType}
              type="text"
            />
          </S.InputWrapper>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <S.InputWrapper>
            <TextField
              disabled
              label="Velocidade máxima"
              value={config?.vehicleSettings.maximumSpeed}
              type="number"
            />
          </S.InputWrapper>

          <S.InputWrapper>
            <TextField
              disabled
              label="Velocidade mínima"
              value={config?.vehicleSettings.minimumSpeed}
              type="number"
            />
          </S.InputWrapper>
        </div>
      </CardContent>
    </Card>
  );
}
