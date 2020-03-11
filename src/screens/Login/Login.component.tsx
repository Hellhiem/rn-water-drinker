import React from "react";
import styled from "styled-components/native";
import { ThemeType } from "types/ThemeType";
import { useTranslation } from "react-i18next";
import { waterDrop } from "assets/images";
import { Input, Button } from "components";

type PropType = {
  signIn: () => void;
  onPasswordChange: (text: string) => void;
  onEmailChange: (text: string) => void;
};

const Container = styled.View`
  flex: 1;
  margin-top: 36px;
  padding-horizontal: 16px;
  align-items: center;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const WaterDrinkerText = styled.Text`
  font-size: ${({ theme }: ThemeType) => theme.headerFontSize};
  font-weight: 900;
`;

const WaterDropImage = styled.Image.attrs({
  source: waterDrop
})`
  width: 80px;
  height: 80px;
`;

const LoginComponent = ({ signIn, onPasswordChange, onEmailChange }: PropType) => {
  const { t } = useTranslation();

  return (
    <Container>
      <HeaderContainer>
        <WaterDrinkerText>{t("Login.title")}</WaterDrinkerText>
        <WaterDropImage />
      </HeaderContainer>
      <Input labelText={t("Login.email")} onChange={onEmailChange} keyboardType="email-address" />
      <Input labelText={t("Login.password")} onChange={onPasswordChange} password />
      <Button text={t("Login.signIn")} onPress={signIn} />
    </Container>
  );
};

export default LoginComponent;
