import React from "react";
import { KeyboardType } from "react-native";
import { ThemeType } from "types/ThemeType";
import styled from "styled-components/native";

type PropType = {
  labelText: string;
  password?: boolean;
  keyboardType?: KeyboardType;
  onChange: (text: string) => void;
};

const InputContainer = styled.View`
  flex-direction: column;
  width: 100%;
  margin-vertical: 8px;
`;

const InputLabel = styled.Text``;

const InputTextField = styled.TextInput`
  border-width: 1px;
  border-color: ${({ theme }: ThemeType) => theme.colors.black};
  border-radius: 10px;
  height: 30px;
  margin-top: 10px;
  padding-left: 3px;
`;

const Input = ({ labelText, onChange, password, keyboardType }: PropType) => {
  return (
    <InputContainer>
      <InputLabel>{labelText}</InputLabel>
      <InputTextField
        onChangeText={text => onChange(text)}
        secureTextEntry={password}
        keyboardType={keyboardType}
        autoCapitalize="none"
      />
    </InputContainer>
  );
};

export default Input;
