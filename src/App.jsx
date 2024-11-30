import React from "react";
import { Provider } from "react-redux"
import { GluestackUIProvider } from "@/../components/ui/gluestack-ui-provider";
import { StyleSheet, View } from "react-native"
import store from "@/redux/store"
import MainView from "@/views/MainView"
import theme from "../gluestack.config"
import "../global.css"

export default function App() {
  return (
    <GluestackUIProvider theme={theme}>
      <Provider store={store}>
        <View style={styles.container}>
          <MainView/>
        </View>
      </Provider>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

