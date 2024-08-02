# react-native-app

## Install Expo for building the react native apps

```node
npm i -g expo-cli
```

Install React Native Tools extension - https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native

Install React Native/ React/ Redux snippets - https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux

Install Prettier - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Install Material icon theme - https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme

## Setting up the project

```expo
expo init DoneWithIt
```

## Running the App

```node
npm start
```

## Building the App

### Layouts

1. Dimensions
   `Dimensions.get("screen")`
2. Device Orientation
   `npm i @react-native-community/hooks`
3. Flexbox

   - `flex`
   - `flexDirection: row` - defaults the alignment of the comntainer in the horizontal axis
   - `justifyContent` - justifies the contents with respect to the primary axis
   - `alignItems` - secondary alignment of the views.
   - `flexWrap`
   - `alignContent`

4. Absolute & Relative Positioning

   - `position: relative` - default is always relative

   ```js
   import {
     Dimensions,
     StyleSheet,
     SafeAreaView,
     StatusBar,
     Text,
     View,
   } from "react-native";

   import {
     useDimensions,
     useDeviceOrientation,
   } from "@react-native-community/hooks";

   export default function App() {
     console.log(Dimensions.get("screen"));
     console.log(useDimensions);
     console.log(useDeviceOrientation());

     const { landscape } = useDeviceOrientation();

     return (
       <View
         style={{
           backgroundColor: "white",
           flex: 1,
           flexDirection: "row", // horizontal
           justifyContent: "center", // main
           alignItems: "center", // secondary
           // alignContent: "center",
           // flexWrap: "wrap",
         }}
       >
         <View
           style={{
             backgroundColor: "dodgerblue",
             width: 100,
             height: 100,
             //alignSelf: "flex-start",
           }}
         />
         <View
           style={{
             backgroundColor: "gold",
             width: 100,
             height: 100,
           }}
         />
         <View
           style={{
             backgroundColor: "tomato",
             width: 100,
             height: 100,
           }}
         />
         <View
           style={{
             backgroundColor: "gray",
             width: 100,
             height: 100,
           }}
         />
       </View>
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
   ```

### Styles

1. Style Properties
2. Organizing Styles
3. Platform-specific Styles
   - border
   - shadow
   - padding
   - margin
   - font styling

```js
import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";

export default function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
```

```js
import { View, Text } from "react-native";
import React from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

import AppText from "./app/components/AppText";

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
    </View>
  );
}
```

![alt text](image.png)

4. Icons

```js
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
      <MaterialCommunityIcons name="email" size={60} color="red" />
    </View>
  );
}
```

5. Platform specific styling

```js
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
```
## UI toolkit
https://reactnativeelements.com/

## Platform specific Constants
npm i expo-constants

```json
 {"addListener": [Function addListener], "appOwnership": "expo", "debugMode": false, "deviceName": "iPhone 15", "easConfig": {}, "emit": [Function emit], "executionEnvironment": "storeClient", "experienceUrl": "exp://192.168.4.31:8081", "expoConfig": {"_internal": {"dynamicConfigPath": null, "isDebug": false, "packageJsonPath": "/Users/tarunkhurana/Engineering/projects/tarunkhurana2015/react-native-app/DoneWithIt/package.json", "projectRoot": "/Users/tarunkhurana/Engineering/projects/tarunkhurana2015/react-native-app/DoneWithIt", "staticConfigPath": "/Users/tarunkhurana/Engineering/projects/tarunkhurana2015/react-native-app/DoneWithIt/app.json"}, "android": {"adaptiveIcon": [Object]}, "hostUri": "192.168.4.31:8081", "icon": "./app/assets/icon.png", "ios": {"supportsTablet": true}, "name": "DoneWithIt", "orientation": "portrait", "platforms": ["ios", "android"], "sdkVersion": "51.0.0", "slug": "DoneWithIt", "splash": {"backgroundColor": "#ffffff", "image": "./app/assets/splash.png", "resizeMode": "contain"}, "userInterfaceStyle": "light", "version": "1.0.0", "web": {"favicon": "./assets/favicon.png"}}, "expoGoConfig": {"__flipperHack": "React Native packager is running", "debuggerHost": "192.168.4.31:8081", "developer": {"projectRoot": "/Users/tarunkhurana/Engineering/projects/tarunkhurana2015/react-native-app/DoneWithIt", "tool": "expo-cli"}, "mainModuleName": "node_modules/expo/AppEntry", "packagerOpts": {"dev": true}}, "expoRuntimeVersion": "2.31.6", "expoVersion": "2.31.6", "getWebViewUserAgentAsync": [Function getWebViewUserAgentAsync], "isDetached": false, "isHeadless": false, "linkingUri": "exp://192.168.4.31:8081/", "listenerCount": [Function listenerCount], "manifest": null, "manifest2": {"assets": [], "createdAt": "2024-08-02T01:54:44.378Z", "extra": {"eas": [Object], "expoClient": [Object], "expoGo": [Object], "scopeKey": "@anonymous/DoneWithIt-e1d89e30-7e3f-4ffb-b507-b4ba383e8181"}, "id": "c3d91a54-9582-4782-9b92-0919b1e4eac2", "isVerified": true, "launchAsset": {"contentType": "application/javascript", "key": "bundle", "url": "http://192.168.4.31:8081/node_modules/expo/AppEntry.bundle?platform=ios&dev=true&hot=false&transform.engine=hermes&transform.bytecode=true&transform.routerRoot=app"}, "metadata": {}, "runtimeVersion": "exposdk:51.0.0"}, "platform": {"ios": {"buildNumber": null}}, "removeAllListeners": [Function removeAllListeners], "removeListener": [Function removeListener], "removeSubscription": [Function removeSubscription], "sessionId": "9FCDD94D-4EE1-4D95-A266-80776581DC10", "statusBarHeight": 54, "supportedExpoSdks": ["51.0.0"], "systemFonts": ["Academy Engraved LET", "AcademyEngravedLetPlain", "Al Nile", "AlNile", "AlNile-Bold", "American Typewriter", "AmericanTypewriter", "AmericanTypewriter-Bold", "AmericanTypewriter-Condensed", "AmericanTypewriter-CondensedBold", "AmericanTypewriter-CondensedLight", "AmericanTypewriter-Light", "AmericanTypewriter-Semibold", "Apple Color Emoji", "Apple SD Gothic Neo", "Apple Symbols", "AppleColorEmoji", "AppleSDGothicNeo-Bold", "AppleSDGothicNeo-Light", "AppleSDGothicNeo-Medium", "AppleSDGothicNeo-Regular", "AppleSDGothicNeo-SemiBold", "AppleSDGothicNeo-Thin", "AppleSDGothicNeo-UltraLight", "AppleSymbols", "Arial", "Arial Hebrew", "Arial Rounded MT Bold", "Arial-BoldItalicMT", "Arial-BoldMT", "Arial-ItalicMT", "ArialHebrew", "ArialHebrew-Bold", "ArialHebrew-Light", "ArialMT", "ArialRoundedMTBold", "Avenir", "Avenir Next", "Avenir Next Condensed", "Avenir-Black", "Avenir-BlackOblique", "Avenir-Book", "Avenir-BookOblique", "Avenir-Heavy", "Avenir-HeavyOblique", "Avenir-Light", "Avenir-LightOblique", "Avenir-Medium", "Avenir-MediumOblique", "Avenir-Oblique", "Avenir-Roman", "AvenirNext-Bold", "AvenirNext-BoldItalic", "AvenirNext-DemiBold", "AvenirNext-DemiBoldItalic", "AvenirNext-Heavy", "AvenirNext-HeavyItalic", "AvenirNext-Italic", "AvenirNext-Medium", "AvenirNext-MediumItalic", "AvenirNext-Regular", "AvenirNext-UltraLight", "AvenirNext-UltraLightItalic", "AvenirNextCondensed-Bold", "AvenirNextCondensed-BoldItalic", "AvenirNextCondensed-DemiBold", "AvenirNextCondensed-DemiBoldItalic", "AvenirNextCondensed-Heavy", "AvenirNextCondensed-HeavyItalic", "AvenirNextCondensed-Italic", "AvenirNextCondensed-Medium", "AvenirNextCondensed-MediumItalic", "AvenirNextCondensed-Regular", "AvenirNextCondensed-UltraLight", "AvenirNextCondensed-UltraLightItalic", "Baskerville", "Baskerville-Bold", "Baskerville-BoldItalic", "Baskerville-Italic", "Baskerville-SemiBold", "Baskerville-SemiBoldItalic", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni Ornaments", "BodoniOrnamentsITCTT", "BodoniSvtyTwoITCTT-Bold", "BodoniSvtyTwoITCTT-Book", "BodoniSvtyTwoITCTT-BookIta", "BodoniSvtyTwoOSITCTT-Bold", "BodoniSvtyTwoOSITCTT-Book", "BodoniSvtyTwoOSITCTT-BookIt", "BodoniSvtyTwoSCITCTT-Book", "Bradley Hand", "BradleyHandITCTT-Bold", "Chalkboard SE", "ChalkboardSE-Bold", "ChalkboardSE-Light", "ChalkboardSE-Regular", "Chalkduster", "Charter", "Charter-Black", "Charter-BlackItalic", "Charter-Bold", "Charter-BoldItalic", "Charter-Italic", "Charter-Roman", "Cochin", "Cochin-Bold", "Cochin-BoldItalic", "Cochin-Italic", "Copperplate", "Copperplate-Bold", "Copperplate-Light", "Courier New", "CourierNewPS-BoldItalicMT", "CourierNewPS-BoldMT", "CourierNewPS-ItalicMT", "CourierNewPSMT", "Damascus", "DamascusBold", "DamascusLight", "DamascusMedium", "DamascusSemiBold", "Devanagari Sangam MN", "DevanagariSangamMN", "DevanagariSangamMN-Bold", "Didot", "Didot-Bold", "Didot-Italic", "DIN Alternate", "DIN Condensed", "DINAlternate-Bold", "DINCondensed-Bold", "DiwanMishafi", "Euphemia UCAS", "EuphemiaUCAS", "EuphemiaUCAS-Bold", "EuphemiaUCAS-Italic", "Farah", "Futura", "Futura-Bold", "Futura-CondensedExtraBold", "Futura-CondensedMedium", "Futura-Medium", "Futura-MediumItalic", "Galvji", "Galvji-Bold", "Geeza Pro", "GeezaPro", "GeezaPro-Bold", "Georgia", "Georgia-Bold", "Georgia-BoldItalic", "Georgia-Italic", "Gill Sans", "GillSans", "GillSans-Bold", "GillSans-BoldItalic", "GillSans-Italic", "GillSans-Light", "GillSans-LightItalic", "GillSans-SemiBold", "GillSans-SemiBoldItalic", "GillSans-UltraBold", "Grantha Sangam MN", "GranthaSangamMN-Bold", "GranthaSangamMN-Regular", "Helvetica", "Helvetica Neue", "Helvetica-Bold", "Helvetica-BoldOblique", "Helvetica-Light", "Helvetica-LightOblique", "Helvetica-Oblique", "HelveticaNeue", "HelveticaNeue-Bold", "HelveticaNeue-BoldItalic", "HelveticaNeue-CondensedBlack", "HelveticaNeue-CondensedBold", "HelveticaNeue-Italic", "HelveticaNeue-Light", "HelveticaNeue-LightItalic", "HelveticaNeue-Medium", "HelveticaNeue-MediumItalic", "HelveticaNeue-Thin", "HelveticaNeue-ThinItalic", "HelveticaNeue-UltraLight", "HelveticaNeue-UltraLightItalic", "Hiragino Maru Gothic ProN", "Hiragino Mincho ProN", "Hiragino Sans", "HiraginoSans-W3", "HiraginoSans-W5", "HiraginoSans-W6", "HiraginoSans-W7", "HiraginoSans-W8", "HiraMaruProN-W4", "HiraMinProN-W3", "HiraMinProN-W6", "Hoefler Text", "HoeflerText-Black", "HoeflerText-BlackItalic", "HoeflerText-Italic", "HoeflerText-Regular", "Impact", "Inter", "Inter-Black", "Inter-BlackItalic", "Inter-Bold", "Inter-BoldItalic", "Inter-ExtraBold", "Inter-ExtraBoldItalic", "Inter-ExtraLight", "Inter-ExtraLightItalic", "Inter-Italic", "Inter-Light", "Inter-LightItalic", "Inter-Medium", "Inter-MediumItalic", "Inter-Regular", "Inter-SemiBold", "Inter-SemiBoldItalic", "Inter-Thin", "Inter-ThinItalic", "Ionicons", "Kailasa", "Kailasa-Bold", "Kefa", "Kefa-Regular", "Khmer Sangam MN", "KhmerSangamMN", "Kohinoor Bangla", "Kohinoor Devanagari", "Kohinoor Gujarati", "Kohinoor Telugu", "KohinoorBangla-Light", "KohinoorBangla-Regular", "KohinoorBangla-Semibold", "KohinoorDevanagari-Light", "KohinoorDevanagari-Regular", "KohinoorDevanagari-Semibold", "KohinoorGujarati-Bold", "KohinoorGujarati-Light", "KohinoorGujarati-Regular", "KohinoorTelugu-Light", "KohinoorTelugu-Medium", "KohinoorTelugu-Regular", "Lao Sangam MN", "LaoSangamMN", "Malayalam Sangam MN", "MalayalamSangamMN", "MalayalamSangamMN-Bold", "Marker Felt", "MarkerFelt-Thin", "MarkerFelt-Wide", "Material Design Icons", "MaterialDesignIcons", "Menlo", "Menlo-Bold", "Menlo-BoldItalic", "Menlo-Italic", "Menlo-Regular", "Mishafi", "Mukta Mahee", "MuktaMahee-Bold", "MuktaMahee-Light", "MuktaMahee-Regular", "Myanmar Sangam MN", "MyanmarSangamMN", "MyanmarSangamMN-Bold", "Noteworthy", "Noteworthy-Bold", "Noteworthy-Light", "Noto Nastaliq Urdu", "Noto Sans Kannada", "Noto Sans Myanmar", "Noto Sans Oriya", "NotoNastaliqUrdu", "NotoNastaliqUrdu-Bold", "NotoSansKannada-Bold", "NotoSansKannada-Light", "NotoSansKannada-Regular", "NotoSansMyanmar-Bold", "NotoSansMyanmar-Light", "NotoSansMyanmar-Regular", "NotoSansOriya", "NotoSansOriya-Bold", "Optima", "Optima-Bold", "Optima-BoldItalic", "Optima-ExtraBlack", "Optima-Italic", "Optima-Regular", "Palatino", "Palatino-Bold", "Palatino-BoldItalic", "Palatino-Italic", "Palatino-Roman", "Papyrus", "Papyrus-Condensed", "Party LET", "PartyLetPlain", "PingFang HK", "PingFang SC", "PingFang TC", "PingFangHK-Light", "PingFangHK-Medium", "PingFangHK-Regular", "PingFangHK-Semibold", "PingFangHK-Thin", "PingFangHK-Ultralight", "PingFangSC-Light", "PingFangSC-Medium", "PingFangSC-Regular", "PingFangSC-Semibold", "PingFangSC-Thin", "PingFangSC-Ultralight", "PingFangTC-Light", "PingFangTC-Medium", "PingFangTC-Regular", "PingFangTC-Semibold", "PingFangTC-Thin", "PingFangTC-Ultralight", "Rockwell", "Rockwell-Bold", "Rockwell-BoldItalic", "Rockwell-Italic", "Rockwell-Regular", "Savoye LET", "SavoyeLetPlain", "Sinhala Sangam MN", "SinhalaSangamMN", "SinhalaSangamMN-Bold", "Snell Roundhand", "SnellRoundhand", "SnellRoundhand-Black", "SnellRoundhand-Bold", "STIX Two Math", "STIX Two Text", "STIXTwoMath-Regular", "STIXTwoText", "STIXTwoText-Italic", "STIXTwoText-Italic_Bold-Italic", "STIXTwoText-Italic_Medium-Italic", "STIXTwoText-Italic_SemiBold-Italic", "STIXTwoText_Bold", "STIXTwoText_Medium", "STIXTwoText_SemiBold", "Symbol", "Tamil Sangam MN", "TamilSangamMN", "TamilSangamMN-Bold", "Thonburi", "Thonburi-Bold", "Thonburi-Light", "Times New Roman", "TimesNewRomanPS-BoldItalicMT", "TimesNewRomanPS-BoldMT", "TimesNewRomanPS-ItalicMT", "TimesNewRomanPSMT", "Trebuchet MS", "Trebuchet-BoldItalic", "TrebuchetMS", "TrebuchetMS-Bold", "TrebuchetMS-Italic", "Verdana", "Verdana-Bold", "Verdana-BoldItalic", "Verdana-Italic", "Zapf Dingbats", "ZapfDingbatsITC", "Zapfino"]}
```

## handling gestures
expo i react-native-gesture-handler
