import React, { useRef, useEffect, memo } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import { ThemeType } from "types/ThemeType";

type PropsType = {
  value: number;
};

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border-width: 1;
  border-color: ${({ theme }: ThemeType) => theme.colors.black};
`;

const ProgressBar = styled.View`
  width: ${({ width }) => width}%;
  border-radius: 20px;
  background-color: ${({ theme }: ThemeType) => theme.colors.mainAccent};
`;

const AnimatedProgressBar = memo(({ value }: PropsType) => {
  const animation = useRef(new Animated.Value(value));

  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  });

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: value,
      duration: 100
    }).start();
  }, [value]);

  return (
    <Container>
      <ProgressBar as={Animated.View} width={width} />
    </Container>
  );
});

export default AnimatedProgressBar;
