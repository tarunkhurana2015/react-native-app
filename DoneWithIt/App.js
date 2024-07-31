import { View, Text } from "react-native";
import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import AppText from "./app/components/AppText";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          borderWidth: 10,
          borderColor: "royalblue",
          borderRadius: 10,
          shadowColor: "grey",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 10,
          padding: 15,
        }}
      >
        <View
          style={{
            backgroundColor: "gold",
            width: 50,
            height: 50,
          }}
        ></View>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
          margin: 20,
        }}
      ></View>

      <Text
        style={{
          fontStyle: "italic",
          fontWeight: "600",
          fontSize: 30,
          color: "tomato",
          textTransform: "capitalize",
          textAlign: "center",
          lineHeight: 30,
        }}
        // Custom Text
      >
        I Love react native
      </Text>
      <AppText>I Love react native</AppText>

      <MaterialCommunityIcons name="email" size={60} color="red" />
    </View>
  );
}
