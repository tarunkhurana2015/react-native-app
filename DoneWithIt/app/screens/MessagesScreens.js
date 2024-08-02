import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/face.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/face.png"),
  },
];

export default function MessagesScreens() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => {
              console.log("Messge Selected", item);
            }}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
