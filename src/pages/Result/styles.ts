import styled from "styled-components";

export const Container = styled.div``;

export const ResultInfoWrapper = styled.div`
  display: flex;

  > div {
    width: 100%;
  }
`;

export const FixedOptions = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  gap: 16px;
  justify-content: space-between;
  background-color: white;
  padding: 16px;
  z-index: 0;
  width: 100%;
  box-sizing: border-box;
  border-top: 0.5px solid lightgray;
  background-color: #fbfbfb;

  > div {
    margin-left: 100px;
  }
`;
