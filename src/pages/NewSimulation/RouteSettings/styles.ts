import styled from "@emotion/styled";

export const Content = styled.div`
  padding: 16px;
  padding-bottom: 48px;
`;

export const RouteSettingsForm = styled.div`
  display: flex;
  justify-content: left;
  gap: 16px;

  > div:first-child {
    width: 15%;
  }

  > div:last-child {
    width: 85%;
  }
`;

export const InputItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
