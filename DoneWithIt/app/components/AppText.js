import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

export default function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 30,
        fontFamily: "Roboto",
      },
    }),
  },
});
