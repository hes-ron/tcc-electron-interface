import React, { useEffect } from "react";

import { Switch, Table } from "@mui/joy";

import { ConfigContext } from "../../../../contexts/config";

import { FormControlLabel, Input, Typography } from "@mui/material";
import { IRouteSettings } from "../../../../@types";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import * as S from "./styles";

interface ZoneDataProps {
  routeSettings: IRouteSettings;
  setRouteSettings?: React.Dispatch<React.SetStateAction<IRouteSettings>>;
  disabled?: boolean;
}

const ZoneData = ({
  disabled,
  routeSettings,
  setRouteSettings,
}: ZoneDataProps) => {
  const [topTableCell, setTopTableCell] = React.useState<string[]>([
    "Zona no mapa",
    "Raio",
    "Ações",
  ]);
  const { config } = React.useContext(ConfigContext);

  const handleRemoveZone = (index: number) => {
    const newZones = [...routeSettings?.zones];
    newZones.splice(index, 1);
    setRouteSettings({
      ...routeSettings,
      zones: newZones,
    });
  };

  const getTableRows = () => {
    return config?.routeSettings?.zones?.map((marker, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>
            <S.InputItem>
              <Input
                type="number"
                value={marker?.radius}
                disabled={disabled}
                onChange={(event) => {
                  const newZones = [...routeSettings?.zones];
                  newZones[index].radius = parseInt(event.target.value);
                  setRouteSettings({
                    ...routeSettings,
                    zones: newZones,
                  });
                }}
              />
            </S.InputItem>
          </td>
          <td>
            <DeleteIcon color="error" onClick={() => handleRemoveZone(index)} />
          </td>
        </tr>
      );
    });
  };

  return (
    <Table aria-label="basic table">
      <thead>
        <tr>
          {topTableCell.map((cell, index) => (
            <th key={index}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {getTableRows().length === 0 ? (
          <div
            style={{
              padding: "16px",
            }}
          >
            <Typography>Nenhuma zona adicionada ao mapa ainda</Typography>
          </div>
        ) : (
          getTableRows()
        )}
      </tbody>
    </Table>
  );
};

export default ZoneData;
