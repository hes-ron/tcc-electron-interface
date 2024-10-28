import React from "react";

import { IGeneralSettings } from "../../../@types";
import { Divider, Tooltip } from "@mui/joy";
import InfoIcon from "@mui/icons-material/Info";
import SignalPriority from "./SignalPriority";
import Operators from "./Operators";
import { FormControlLabel, FormLabel, Switch } from "@mui/material";

import { tooltipsTexts } from "../../../utils/tooltipsTexts";
import * as S from "./styles";

interface GeneralSettingsProps {
  generalSettings: IGeneralSettings;
  setGeneralSettings: React.Dispatch<React.SetStateAction<IGeneralSettings>>;
}

export default function GeneralSettings({
  generalSettings,
  setGeneralSettings,
}: GeneralSettingsProps) {
  return (
    <S.Content>
      <S.GeneralSettingsForm>
        <div>
          <S.InputItem>
            <FormLabel>Ligar sombreamento</FormLabel>
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={generalSettings?.activateSignal}
                  onChange={() => {
                    setGeneralSettings({
                      ...generalSettings,
                      activateSignal: !generalSettings?.activateSignal,
                    });
                  }}
                />
              }
              label=""
              labelPlacement="start"
            />

            <Tooltip title={tooltipsTexts.sombreamento}>
              <InfoIcon color="info" style={{ marginLeft: 16 }} />
            </Tooltip>
          </S.InputItem>

          <S.InputItem>
            <FormLabel>Ligar área indevida</FormLabel>
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={generalSettings?.activeAvoid}
                  onChange={() => {
                    setGeneralSettings({
                      ...generalSettings,
                      activeAvoid: !generalSettings.activeAvoid,
                    });
                  }}
                />
              }
              label=""
              labelPlacement="start"
            />

            <Tooltip title={tooltipsTexts.areaIndevida}>
              <InfoIcon color="info" style={{ marginLeft: 16 }} />
            </Tooltip>
          </S.InputItem>
          <S.InputItem>
            <FormLabel>Chuva</FormLabel>
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={generalSettings?.rain}
                  onChange={() => {
                    setGeneralSettings({
                      ...generalSettings,
                      rain: !generalSettings.rain,
                    });
                  }}
                />
              }
              label=""
              labelPlacement="start"
            />

            <Tooltip title={tooltipsTexts.chuva}>
              <InfoIcon color="info" style={{ marginLeft: 16 }} />
            </Tooltip>
          </S.InputItem>
        </div>

        <Divider orientation="vertical" />

        <div>
          <S.InputItem>
            <SignalPriority
              generalSettings={generalSettings}
              setGeneralSettings={setGeneralSettings}
            />
          </S.InputItem>
        </div>

        <Divider orientation="vertical" />

        <div>
          <S.InputItem>
            <Operators
              generalSettings={generalSettings}
              setGeneralSettings={setGeneralSettings}
            />
          </S.InputItem>
        </div>
      </S.GeneralSettingsForm>
    </S.Content>
  );
}
