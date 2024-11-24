import React from "react";
import * as S from "./styles";
import { SidebarContext } from "../../contexts/sidebar";
import Sidebar from "../../components/Sidebar";

interface DefaultPage {
  children: React.ReactNode;
}

const DefaultPage = ({ children }: DefaultPage) => {
  const { sideBarOpen, setSideBarOpen } = React.useContext(SidebarContext);

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        paddingBottom: "200px",
      }}
    >
      <Sidebar />
      <S.Content sideBarOpen={sideBarOpen}>{children}</S.Content>
    </div>
  );
};

export default DefaultPage;
