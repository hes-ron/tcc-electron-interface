import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(vehicleType: string, payloadCapacity: number) {
  return { vehicleType, payloadCapacity };
}

const rows = [
  createData("Automóvel", 0),
  createData("Bitrem", 57000),
  createData("Caminhão toco", 6000),
  createData("Caminhão truck", 12000),
  createData("Caminhão bitruck", 14000),
  createData("Cavalo toco + carreta 2 eixos", 33000),
  createData("Cavalo toco + carreta 3 eixos", 42000),
  createData("Cavalo truck + carreta 3 eixos", 46000),
  createData("Rodotrem", 74000),
  createData("Veículo Urbano de Carga (VUC)", 3000),
];

const VehicleTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tipo do veículo</TableCell>
            <TableCell align="right">Capacidade de carga</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.vehicleType}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.vehicleType}
              </TableCell>
              <TableCell align="right">{row.payloadCapacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VehicleTable;
