import App from "./src/App";
import { AppRegistry } from "react-native";
import { registerRootComponent } from "expo";
import { Platform } from "react-native";

if (Platform.OS === "web") registerRootComponent(App);

AppRegistry.registerComponent("main", () => App);

export default App;
