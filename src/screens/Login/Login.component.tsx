import React from "react";
import styled from "styled-components/native";
import { ThemeType } from "types/ThemeType";

const Container = styled.View`
  flex: 1;
  margin-top: 36px;
  align-items: center;
`;

const WaterDrinkerText = styled.Text`
  font-size: ${({ theme }: ThemeType) => theme.headerFontSize};
`;

const LoginComponent = () => {
  return (
    <Container>
      <WaterDrinkerText>Hello</WaterDrinkerText>
    </Container>
  );
};

export default LoginComponent;
