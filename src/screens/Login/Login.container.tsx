import React, { useState } from "react";
import { Alert } from "react-native";
import firebase from "react-native-firebase";
import { useTranslation } from "react-i18next";
import NavigationRoutes from "types/NavigationRoutes";
import { NavigationProps } from "types/NavigationType";
import LoginComponent from "./Login.component";

const LoginContainer = ({ navigation }: { navigation: NavigationProps }) => {
  const { t } = useTranslation();
  const [emailText, onEmailChange] = useState("");
  const [passwordText, onPasswordChange] = useState("");

  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailText, passwordText)
      .then(
        () => {
          navigation.navigate(NavigationRoutes.WaterStatistics);
        },
        () => {
          Alert.alert(t("Alert.error"), t("Alert.wrongPasswordOrEmail"), [{ text: t("Alert.ok") }], {
            cancelable: false
          });
        }
      );
  };

  return <LoginComponent signIn={signIn} onEmailChange={onEmailChange} onPasswordChange={onPasswordChange} />;
};

export default LoginContainer;
