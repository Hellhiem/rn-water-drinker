import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/native";
import { AnimatedProgressBar, Input, Button } from "components";
import { ThemeType } from "types/ThemeType";

type PropsType = {
  waterDrunk: number;
  waterEntered: string;
  enterWaterUnits: (milliliters: string) => void;
  submitWaterData: () => void;
};

const Container = styled.View`
  flex: 1;
  margin-top: 36px;
  padding-horizontal: 16px;
  align-items: center;
`;

const InfoText = styled.Text`
  font-size: ${({ theme }: ThemeType) => theme.paragraphFontSize};
  margin-vertical: 10px;
  text-align: center;
`;

const InputContainer = styled.View`
  margin-top: 32px;
  width: 100%;
`;

const WaterStatisticsComponent = ({ waterEntered, waterDrunk, enterWaterUnits, submitWaterData }: PropsType) => {
  const { t } = useTranslation();

  const submitData = () => {
    submitWaterData();
    enterWaterUnits("");
  };

  const dailyWaterGoal = 3500;
  const dailyProgress = (waterDrunk / dailyWaterGoal) * 100;
  return (
    <Container>
      <InfoText>{t("WaterStatistics.youDrank", { count: waterDrunk })}</InfoText>
      <AnimatedProgressBar value={dailyProgress} />
      <InfoText>{t("WaterStatistics.rememberToDrink")}</InfoText>
      <InputContainer>
        <Input
          labelText={t("WaterStatistics.enterWater")}
          keyboardType="number-pad"
          onChange={enterWaterUnits}
          value={waterEntered}
        />
        <Button text={t("WaterStatistics.addWater")} onPress={submitData} />
      </InputContainer>
    </Container>
  );
};

export default WaterStatisticsComponent;
