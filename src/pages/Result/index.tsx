import React, { useEffect } from "react";
import DefaultPage from "../DefaultPage";
import BreadCrumbs from "../../components/Breadcrumbs";
import CopyIcon from "@mui/icons-material/FileCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useNavigate } from "react-router-dom";
import MapWithRoute from "./MapWithRoute";
const fs = window.require("fs");
const { shell } = window.require("electron");
import Snackbar from "@mui/joy/Snackbar";

import { Button, Card, Typography } from "@mui/joy";
import * as S from "./styles";
import { SidebarContext } from "../../contexts/sidebar";

type TResults = {
  horarioSaida: string;
  horarioChegada: string;
  tempoTotalEspera: string;
  tempoTotalOciosidade: string;
  tempoTotalViagem: string;
  tempoSombreamento: string;
  tempoAreasIndevidas: string;
  velocidadeMedia: string;
  velocidadeMaxima: string;
  distanciaTotalPercorrida: string;
  linkRota: string;
};

const Result = () => {
  const [results, setResults] = React.useState<TResults>();
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const { sideBarOpen } = React.useContext(SidebarContext);

  const navigate = useNavigate();

  useEffect(() => {
    const caminhoArquivo = "./resultFile.txt";

    fs.readFile(caminhoArquivo, (err: any, data: any) => {
      const raw = data.toString().split("\n");

      setResults({
        horarioSaida: raw[0].split(": ")[1],
        horarioChegada: raw[1].split(": ")[1],
        tempoTotalEspera: raw[2].split(": ")[1],
        tempoTotalOciosidade: raw[3].split(": ")[1],
        tempoTotalViagem: raw[4].split(": ")[1],
        tempoSombreamento: raw[5].split(": ")[1],
        tempoAreasIndevidas: raw[6].split(": ")[1],
        velocidadeMedia: raw[8].split(": ")[1],
        velocidadeMaxima: raw[9].split(": ")[1],
        distanciaTotalPercorrida: raw[11].split(": ")[1],
        linkRota: raw[14].split(": ")[1],
      });
    });
  }, []);

  const breadCrumbs = [
    {
      label: "Início",
      disabled: false,
      onClick: () => navigate("/"),
    },
    {
      label: "Configuração atual",
      disabled: false,
      onClick: () => navigate("/configuracao-atual"),
    },
    {
      label: "Resultado",
      disabled: true,
    },
  ];

  function copyToClipboard(text: string) {
    // Usa a API Clipboard para copiar o texto
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setSnackOpen(true);
      })
      .catch((err) => {
        setIsError(true);
      });
  }

  return (
    <DefaultPage>
      <BreadCrumbs breadCrumbs={breadCrumbs} />

      <MapWithRoute linkUrl={results?.linkRota} />

      <Card>
        <S.ResultInfoWrapper>
          <div>
            <Typography level="body-md">
              Horário saída: <b>{results?.horarioSaida}</b>
            </Typography>

            <Typography level="body-md">
              Horário chegada: <b>{results?.horarioChegada}</b>
            </Typography>

            <Typography level="body-md">
              Tempo total de espera: <b>{results?.tempoTotalEspera}</b>
            </Typography>

            <Typography level="body-md">
              Tempora total de ociosidade:{" "}
              <b>{results?.tempoTotalOciosidade}</b>
            </Typography>

            <Typography level="body-md">
              Tempo total da viagem: <b>{results?.tempoTotalViagem}</b>
            </Typography>
          </div>

          <div>
            <Typography level="body-md">
              Tempo de sombreamento: <b>{results?.tempoSombreamento}</b>
            </Typography>

            <Typography level="body-md">
              Tempo em áreas indevidas: <b>{results?.tempoAreasIndevidas}</b>
            </Typography>

            <Typography level="body-md">
              Velocidade média: <b>{results?.velocidadeMedia}</b>
            </Typography>

            <Typography level="body-md">
              Velocidade máxima: <b>{results?.velocidadeMaxima}</b>
            </Typography>

            <Typography level="body-md">
              Distância percorrida: <b>{results?.distanciaTotalPercorrida}</b>
            </Typography>
          </div>
        </S.ResultInfoWrapper>
      </Card>

      <S.FixedOptions>
        <div
          style={
            sideBarOpen
              ? {
                  width: "100%",
                  marginLeft: "104px",
                  display: "flex",
                  gap: "8px",
                }
              : {
                  width: "100%",
                  marginLeft: "274px",
                  display: "flex",
                  gap: "8px",
                }
          }
        >
          <Button
            onClick={() => shell.openExternal(results?.linkRota)}
            style={{
              display: "flex",
              gap: "8px",
              height: "30px",
              width: "90%",
            }}
          >
            Abrir rota no Google Maps <OpenInNewIcon width={16} height={16} />
          </Button>

          <Button
            onClick={() => copyToClipboard(results?.linkRota)}
            style={{
              display: "flex",
              gap: "8px",
              height: "30px",
              width: "10%",
            }}
          >
            Copiar URL <CopyIcon width={16} height={16} />
          </Button>
        </div>
      </S.FixedOptions>

      <Snackbar
        autoHideDuration={5000}
        variant="soft"
        color={isError ? "danger" : "success"}
        open={snackOpen}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        endDecorator={
          <Button
            onClick={() => setSnackOpen(false)}
            size="sm"
            variant="soft"
            color="success"
          >
            Fechar
          </Button>
        }
      >
        {isError
          ? "Houve um problema ao copiar a URL :("
          : "URL copiada ao clipboard!"}
      </Snackbar>
    </DefaultPage>
  );
};

export default Result;