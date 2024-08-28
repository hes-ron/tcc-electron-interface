import React, { useEffect } from "react";

import { Switch, Table } from "@mui/joy";

import { ConfigContext } from "../../../../contexts/config";

import { FormControlLabel, Input, Typography } from "@mui/material";
import { IRouteSettings } from "../../../../@types";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import * as S from "./styles";

interface PointsDataProps {
  timeWindow: boolean;
  routeSettings: IRouteSettings;
  setRouteSettings?: React.Dispatch<React.SetStateAction<IRouteSettings>>;
  disabled?: boolean;
}

const PointsData = ({
  timeWindow,
  disabled,
  routeSettings,
  setRouteSettings,
}: PointsDataProps) => {
  const [topTableCell, setTopTableCell] = React.useState<string[]>([]);
  const { config } = React.useContext(ConfigContext);

  useEffect(() => {
    if (timeWindow) {
      setTopTableCell([
        "Ponto no mapa",
        "Descarregar",
        "Início",
        "Fim",
        "Manual",
        "Ações",
      ]);
    } else {
      setTopTableCell(["Ponto no mapa", "Ações"]);
    }
  }, [timeWindow]);

  const handleRemovePoint = (index: number) => {
    const newMarkers = [...routeSettings?.points];
    newMarkers.splice(index, 1);
    setRouteSettings({
      ...routeSettings,
      points: newMarkers,
    });
  };

  const getTableRows = () => {
    return config?.routeSettings?.points?.map((marker, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          {timeWindow && (
            <>
              <td>
                <S.InputItem>
                  <Input
                    type="number"
                    value={marker?.unload}
                    disabled={disabled}
                    onChange={(event) => {
                      const newMarkers = [...routeSettings?.points];
                      newMarkers[index].unload = parseInt(event.target.value);
                      setRouteSettings({
                        ...routeSettings,
                        points: newMarkers,
                      });
                    }}
                  />
                </S.InputItem>
              </td>
              <td>
                <S.InputItem>
                  <Input
                    type="number"
                    value={marker?.start}
                    disabled={disabled}
                    onChange={(event) => {
                      const newMarkers = [...routeSettings?.points];
                      newMarkers[index].start = parseInt(event.target.value);
                      setRouteSettings({
                        ...routeSettings,
                        points: newMarkers,
                      });
                    }}
                  />
                </S.InputItem>
              </td>
              <td>
                <S.InputItem>
                  <Input
                    type="number"
                    value={marker.end}
                    disabled={disabled}
                    onChange={(event) => {
                      const newMarkers = [...routeSettings?.points];
                      newMarkers[index].end = parseInt(event.target.value);
                      setRouteSettings({
                        ...routeSettings,
                        points: newMarkers,
                      });
                    }}
                  />
                </S.InputItem>
              </td>
              <td>
                <S.InputItem>
                  <Input
                    type="number"
                    value={marker.manual}
                    disabled={disabled}
                    onChange={(event) => {
                      const newMarkers = [...routeSettings?.points];
                      newMarkers[index].manual = parseInt(event.target.value);
                      setRouteSettings({
                        ...routeSettings,
                        points: newMarkers,
                      });
                    }}
                  />
                </S.InputItem>
              </td>
            </>
          )}
          <td>
            <DeleteIcon
              color="error"
              onClick={() => handleRemovePoint(index)}
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
        {getTableRows().length === 0 ? (
          <div
            style={{
              padding: "16px",
            }}
          >
            <Typography>Nenhum ponto adicionado ao mapa ainda</Typography>
          </div>
        ) : (
          getTableRows()
        )}
      </tbody>
    </Table>
  );
};

export default PointsData;
