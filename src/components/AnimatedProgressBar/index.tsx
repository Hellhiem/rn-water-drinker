import React from "react";
import styled from "styled-components/native";
import { ThemeType } from "types/ThemeType";

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border-width: 1;
  border-color: ${({ theme }: ThemeType) => theme.colors.black};
`;

const ProgressBar = styled.View`
  width: 100%;
  border-radius: 20px;
  background-color: ${({ theme }: ThemeType) => theme.colors.mainAccent};
`;

const AnimatedProgressBar = () => {
  return (
    <Container>
      <ProgressBar />
    </Container>
  );
};

export default AnimatedProgressBar;
