import React from "react";
import DefaultPage from "../DefaultPage";

import BreadCrumbs from "../../components/Breadcrumbs";
import { Alert, IconButton } from "@mui/joy";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RestoreIcon from "@mui/icons-material/RestoreOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import Card from "../../components/Card";
import * as S from "./styles";

const Home = () => {
  const [alertOpen, setAlertOpen] = React.useState(true);
  const breadCrumbs = [{ label: "Início", disabled: true }];

  const cards = [
    {
      title: "Nova simulação",
      description: "Crie uma nova simulação.",
      buttonText: "Ir",
      buttonOnClickUrl: "/new",
      icon: <AddIcon sx={{ fontSize: "4rem", color: "rgb(11, 107, 203)" }} />,
      color: "rgb(11, 107, 203)",
    },
    {
      title: "Configuração atual",
      description: "Visualize o estado atual do arquivo de configuração.",
      buttonText: "Visualizar",
      buttonOnClickUrl: "/configuracao-atual",
      icon: (
        <RestoreIcon sx={{ fontSize: "4rem", color: "rgb(11, 107, 203)" }} />
      ),
      color: "rgb(11, 107, 203)",
    },
  ];

  return (
    <DefaultPage>
      <S.Header>
        <BreadCrumbs breadCrumbs={breadCrumbs} />
        {alertOpen && (
          <Alert
            color="primary"
            endDecorator={
              <IconButton
                variant="soft"
                color="primary"
                onClick={() => setAlertOpen(false)}
              >
                <CloseRoundedIcon />
              </IconButton>
            }
          >
            Aqui é o espaço onde não ocorre nenhuma atividade, escolha o que
            fazer!
          </Alert>
        )}
      </S.Header>
      <S.CardsWrapper>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </S.CardsWrapper>
    </DefaultPage>
  );
};

export default Home;
