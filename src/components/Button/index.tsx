import React from "react";
import styled from "styled-components/native";
import { ThemeType } from "types/ThemeType";

type PropsType = {
  text: string;
  onPress: () => void;
};

const Container = styled.TouchableOpacity`
  background-color: ${({ theme }: ThemeType) => theme.colors.mainAccent};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  margin-vertical: 16px;
  height: 40px;
  width: 100%;
`;

const ButtonText = styled.Text``;

const Button = ({ text, onPress }: PropsType) => {
  return (
    <Container onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
};

export default Button;
