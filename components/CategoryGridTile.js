import React from "react";
import { StyleSheet, TouchableNativeFeedback, Text, View } from "react-native";
import Colors from "../constants/Colors";

const CategoryGridTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.text} numberOfLines={2}>
            {props.title}{" "}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 40,
    overflow: "hidden", //POTREBNO SAMO ZA ANDROID JER TU KORISTIMO TouchableNativeFeedback, A NA IOS SAMO Touchable PA NAM NE TRIBA TO ZA ONAJ RADIUS STA PISE ISPOD
    elevation: 3, //PREMJSETILI SMO IZ CONTAINER VAMO JER NAM OVERFLOW TO
    //SPRIJEČI DA VIDIMO, ANJEGA TRIBAMO DA NAM ONAJ TOUCHABLE BUDE ISTO ZAOBLJEN
  },
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 40,
    padding: 20,
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
    textAlign: "right",
  },
});

export default CategoryGridTile;
