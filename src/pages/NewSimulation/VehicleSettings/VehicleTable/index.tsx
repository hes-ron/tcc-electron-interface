import React, { useEffect } from "react";

import { Switch, Table } from "@mui/joy";

import { ConfigContext } from "../../../../contexts/config";

import { FormControlLabel, Input, Typography } from "@mui/material";
import { IRouteSettings, IVehicleSettings } from "../../../../@types";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import * as S from "./styles";

interface VehicleTableProps {
  vehicleSettings: IVehicleSettings;
  setVehicleSettings?: React.Dispatch<React.SetStateAction<IVehicleSettings>>;
}

const VehicleTable = ({
  vehicleSettings,
  setVehicleSettings,
}: VehicleTableProps) => {
  const [topTableCell, setTopTableCell] = React.useState<string[]>([
    "Tipo do veículo",
    "Capacidade de carga",
    "Ações",
  ]);
  const { config } = React.useContext(ConfigContext);

  const handleRemoveVehicle = (index: number) => {};

  const getTableRows = () => {
    return config?.vehicles?.map((vehicle, index) => {
      return (
        <tr key={index}>
          <td>{vehicle?.vehicleType}</td>
          <td>{vehicle?.payloadCapacity} kg</td>
          <td>
            <DeleteIcon
              color="error"
              onClick={() => handleRemoveVehicle(index)}
            />
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
        {getTableRows()?.length === 0 ? (
          <div
            style={{
              padding: "16px",
            }}
          >
            <Typography>Nenhum veículo adicionado.</Typography>
          </div>
        ) : (
          getTableRows()
        )}
      </tbody>
    </Table>
  );
};

export default VehicleTable;
