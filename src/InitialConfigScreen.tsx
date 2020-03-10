import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "store";
import theme from "common/theme";
import RootNavigator from "./RootNavigator";

const InitialConfigScreen = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </ThemeProvider>
  );
};

export default InitialConfigScreen;
