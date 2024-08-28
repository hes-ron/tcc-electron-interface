import styled from "@emotion/styled";
import { MenuItem } from "react-pro-sidebar";

export const TopSideBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px;
  box-sizing: border-box;
`;

export const SidebarButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const MenuItemStyled = styled(MenuItem)<{ active?: boolean }>`
  color: white;

  .ps-menu-button:hover {
    background-color: white !important;
    color: #0b6bcb !important;
    transition: all 0.3s;
    svg {
      color: #0b6bcb;
    }
  }

  ${(props) =>
    props.active &&
    `
    &:before {
      content: '';
      position: absolute;
      width: 3px;
      height: 100%;
      background-color: white;
      left: 0;
    }
  `}
`;
