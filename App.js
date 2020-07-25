import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealsNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";
import mealsReducer from "./store/reducers/meals";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

/* AKO NEMAMO VIŠE RAZLICITIH REDUCERA ONDA BEZ combine,
SAMO const store=createStore(mealsReducer)
*/

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
