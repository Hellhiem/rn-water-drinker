import React from "react";
import { Alert } from "react-native";
import firebase from "react-native-firebase";
import { useTranslation } from "react-i18next";
import LoginComponent from "./Login.component";

const LoginContainer = () => {
  const { t } = useTranslation();

  const signIn = (email: string, password: string) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        user => {
          console.log(user);
        },
        () => {
          Alert.alert(t("Alert.error"), t("Alert.wrongPasswordOrEmail"), [{ text: t("Alert.ok") }], {
            cancelable: false
          });
        }
      );
  };

  return <LoginComponent signIn={signIn} />;
};

export default LoginContainer;
