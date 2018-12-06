/** @format */

import { AppRegistry } from "react-native"
require("expo-file-system").FileSystem
import App from "./App"
import { name as appName } from "./app.json"

AppRegistry.registerComponent(appName, () => App)
