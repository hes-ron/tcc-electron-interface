import React from "react";

import { IGeneralSettings, IOperators } from "../../../../@types";
import { Tooltip } from "@mui/joy";
import InfoIcon from "@mui/icons-material/Info";

import {
  FormControlLabel,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
} from "@mui/material";

import * as S from "./styles";

interface OperatorsProps {
  generalSettings: IGeneralSettings;
  setGeneralSettings: React.Dispatch<React.SetStateAction<IGeneralSettings>>;
}

export default function Operators({
  generalSettings,
  setGeneralSettings,
}: OperatorsProps) {
  return (
    <S.Content>
      <FormControl>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FormLabel>Operadora</FormLabel>

          <Tooltip title="Habilita a função de filtro por sombreamento na simulação.">
            <InfoIcon color="info" style={{ marginLeft: 16 }} />
          </Tooltip>
        </div>

        <RadioGroup
          row
          value={Object.keys(generalSettings?.operators).find(
            (key) => generalSettings?.operators[key as keyof IOperators]
          )}
          onChange={(event) => {
            generalSettings.operators.opClaro = false;
            generalSettings.operators.opOi = false;
            generalSettings.operators.opTim = false;
            generalSettings.operators.opVivo = false;
            setGeneralSettings({
              ...generalSettings,
              operators: {
                ...generalSettings.operators,
                [event.target.value]:
                  !generalSettings.operators[
                    event.target.value as keyof IOperators
                  ],
              },
            });
          }}
        >
          <FormControlLabel value="opVivo" control={<Radio />} label="Vivo" />
          <FormControlLabel value="opTim" control={<Radio />} label="Tim" />
          <FormControlLabel value="opClaro" control={<Radio />} label="Claro" />
          <FormControlLabel value="opOi" control={<Radio />} label="Oi" />
        </RadioGroup>
      </FormControl>
    </S.Content>
  );
}
