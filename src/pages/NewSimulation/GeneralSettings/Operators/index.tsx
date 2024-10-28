import React from "react";

import { IGeneralSettings, IOperators } from "../../../../@types";
import { Tooltip } from "@mui/joy";
import { tooltipsTexts } from "../../../../utils/tooltipsTexts";
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

          <Tooltip title={tooltipsTexts.operadora}>
            <InfoIcon color="info" style={{ marginLeft: 16 }} />
          </Tooltip>
        </div>

        <RadioGroup
          row
          value={Object.keys(generalSettings?.operators).find(
            (key) => generalSettings?.operators[key as keyof IOperators]
          )}
          onChange={(event) => {
            const selectedOperator = event.target.value as keyof IOperators;

            // Atualiza o estado com todas as operadoras como false, exceto a selecionada
            setGeneralSettings({
              ...generalSettings,
              operators: {
                opClaro: selectedOperator === "opClaro",
                opOi: selectedOperator === "opOi",
                opTim: selectedOperator === "opTim",
                opVivo: selectedOperator === "opVivo",
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
