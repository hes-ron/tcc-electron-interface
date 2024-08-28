import styled from "styled-components";

export const Content = styled.div<{ sideBarOpen: boolean }>`
  width: ${(props) =>
    props.sideBarOpen ? "calc(100% - 80px)" : "calc(100% - 50px)"};
  padding: 24px;
  padding-left: ${(props) => (props.sideBarOpen ? "116px" : "286px")};
  transition: all 0.3s;
`;
