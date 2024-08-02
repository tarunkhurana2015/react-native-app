import { View, Text } from "react-native";
import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

// export default function App() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <AppButton
//         title="Login"
//         onPress={() => {
//           console.log("Tapped");
//         }}
//       />
//     </View>
//   );
// }

// export default function App() {
//   return <WelcomeScreen></WelcomeScreen>;
// }

export default function App() {
  return <ViewImageScreen></ViewImageScreen>;
}

// export default function App() {
//   return (
//     <View
//       style={{
//         backgroundColor: "#f8f4f4",
//         padding: 20,
//         paddingTop: 100,
//       }}
//     >
//       <Card
//         title="Red jacket for sale"
//         subtitle="$100"
//         image={require("./app/assets/jacket.jpg")}
//       ></Card>
//     </View>
//   );
// }

// export default function App() {
//   return <ListingDetailsScreen />;
// }
