import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";

import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id != message.id);
    setMessages(newMessages);
  };
  const [refresh, setRefresh] = useState(false);

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
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  handleDelete(item);
                }}
              ></ListItemDeleteAction>
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refresh}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/face.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
