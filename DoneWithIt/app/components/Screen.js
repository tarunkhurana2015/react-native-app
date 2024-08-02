import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";

import Constants from "expo-constants";

export default function Screen({ children }) {
  console.log(Constants);
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "yellow",
    flex: 1,
  },
});
