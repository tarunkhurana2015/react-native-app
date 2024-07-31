import { View, Text } from "react-native";
import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";

import { MaterialCommunityIcons } from "@expo/vector-icons";

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

export default function App() {
  return <WelcomeScreen></WelcomeScreen>;
}
