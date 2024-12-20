import styled from "styled-components";

export const Container = styled.div``;

export const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 32px;

  > div {
    margin: 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
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
