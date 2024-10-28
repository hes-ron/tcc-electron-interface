import React from "react";

import { IGeneralSettings } from "../../../../@types";
import InfoIcon from "@mui/icons-material/Info";

import { Tooltip } from "@mui/joy";
import { tooltipsTexts } from "../../../../utils/tooltipsTexts";

import * as S from "./styles";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

interface SignalPriorityProps {
  generalSettings: IGeneralSettings;
  setGeneralSettings: React.Dispatch<React.SetStateAction<IGeneralSettings>>;
}

export default function SignalPriority({
  generalSettings,
  setGeneralSettings,
}: SignalPriorityProps) {
  return (
    <S.Content>
      <FormControl>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FormLabel>Prioridade de sinal</FormLabel>

          <Tooltip title={tooltipsTexts.prioridadeSinal}>
            <InfoIcon color="info" style={{ marginLeft: 16 }} />
          </Tooltip>
        </div>
        <RadioGroup
          row
          value={generalSettings?.prioritySignalAvoid}
          onChange={(event) => {
            setGeneralSettings({
              ...generalSettings,
              prioritySignalAvoid: parseInt(event.target.value),
            });
          }}
        >
          <FormControlLabel
            value="0"
            control={<Radio />}
            label="Sombreamento"
          />
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Área indevida"
          />
          <FormControlLabel value="2" control={<Radio />} label="Ambos" />
        </RadioGroup>
      </FormControl>
    </S.Content>
  );
}
