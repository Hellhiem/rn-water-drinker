import React, { useState } from "react";
import firebase from "react-native-firebase";
import { waterReminderNotification, androidChannel } from "helpers/firebase";
import { Alert, Platform } from "react-native";
import { useTranslation } from "react-i18next";
import NavigationRoutes from "types/NavigationRoutes";
import { NavigationProps } from "types/NavigationType";
import LoginComponent from "./Login.component";

const LoginContainer = ({ navigation }: { navigation: NavigationProps }) => {
  const { t } = useTranslation();
  const [emailText, onEmailChange] = useState("");
  const [passwordText, onPasswordChange] = useState("");

  const scheduleNotification = () => {
    Platform.OS === "android" && firebase.notifications().android.createChannel(androidChannel);

    const date = new Date();
    date.setMinutes(date.getMinutes() + 120);

    firebase.notifications().scheduleNotification(waterReminderNotification, {
      fireDate: date.getTime()
    });
  };

  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailText, passwordText)
      .then(
        () => {
          scheduleNotification();
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
