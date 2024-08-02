import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.usercontainer}>
          <ListItem
            image={require("../assets/face.png")}
            title="Name"
            subtitle="listing"
          ></ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  usercontainer: {
    marginVertical: 40,
  },
});
