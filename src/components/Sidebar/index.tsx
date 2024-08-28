import React from "react";
import { Sidebar as SidebarPRO, Menu } from "react-pro-sidebar";

import { IconButton, Typography } from "@mui/joy";
import { SidebarContext } from "../../contexts/sidebar";
import CloseIcon from "@mui/icons-material/CloseOutlined";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import HelpIcon from "@mui/icons-material/HelpOutline";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/AddCircleOutline";
import RestoreIcon from "@mui/icons-material/RestoreOutlined";

import DocumentationDrawer from "../DocumentationDrawer";
import * as S from "./styles";

const Sidebar = () => {
  const { sideBarOpen, setSideBarOpen, setPage, page } =
    React.useContext(SidebarContext);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const { ipcRenderer } = window.require("electron");
  const navigate = useNavigate();

  const getActualRoute = () => {
    return window.location.pathname;
  };

  const topMenuItems = [
    {
      title: "Início",
      icon: <HomeIcon sx={{ color: "white" }} />,
      path: "/",
      onClick: () => {
        navigate("/");
        setPage("/");
      },
    },
    {
      title: "Simular",
      icon: <AddIcon sx={{ color: "white" }} />,
      path: "/new",
      onClick: () => {
        navigate("/new");
        setPage("/new");
      },
    },
    {
      title: "Configuração atual",
      icon: <RestoreIcon sx={{ color: "white" }} />,
      path: "/configuracao-atual",
      onClick: () => {
        navigate("/configuracao-atual");
        setPage("/configuracao-atual");
      },
    },
  ];

  const bottomMenuItems = [
    {
      title: "Sair",
      icon: <LogoutIcon sx={{ color: "white" }} />,
      onClick: () => {
        ipcRenderer.send("close", []);
      },
    },
  ];

  return (
    <SidebarPRO
      collapsed={sideBarOpen}
      backgroundColor="#0B6BCB"
      width="250px"
      rootStyles={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        "> div": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <div>
        <S.TopSideBar>
          <S.SidebarButtonWrapper>
            <IconButton
              color="primary"
              variant="outlined"
              onClick={() => setSideBarOpen(!sideBarOpen)}
            >
              {!sideBarOpen ? (
                <>
                  <Typography sx={{ color: "white" }}>Fechar </Typography>
                  <CloseIcon sx={{ color: "white" }} />
                </>
              ) : (
                <MenuIcon sx={{ color: "white" }} />
              )}
            </IconButton>
          </S.SidebarButtonWrapper>
        </S.TopSideBar>
        <Menu>
          {topMenuItems.map((item, index) => (
            <S.MenuItemStyled
              title={item.title}
              active={page === item.path}
              key={index}
              icon={item.icon}
              onClick={() => item.onClick()}
            >
              {item.title}
            </S.MenuItemStyled>
          ))}
        </Menu>
      </div>

      <div>
        <Menu>
          <S.MenuItemStyled
            icon={<HelpIcon />}
            title="Documentação"
            onClick={() => setDrawerOpen(true)}
          >
            Documentação
          </S.MenuItemStyled>
          {bottomMenuItems.map((item, index) => (
            <S.MenuItemStyled
              title="Sair"
              key={index}
              icon={item.icon}
              onClick={() => item.onClick()}
            >
              {item.title}
            </S.MenuItemStyled>
          ))}
        </Menu>
      </div>

      <DocumentationDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
    </SidebarPRO>
  );
};

export default Sidebar;
