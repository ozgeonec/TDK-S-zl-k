import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";

import theme from "./components/utils/theme";

import Navigation from "./navigation";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
         <Navigation/>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
