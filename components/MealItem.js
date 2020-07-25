import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  ImageBackground
} from "react-native";

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableNativeFeedback onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <Text style={styles.title} numberOfLines={1}>
                {props.title}{" "}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text style={{ fontFamily: "open-sans-bold" }}>
              {props.duration}
            </Text>
            <Text style={{ fontFamily: "open-sans-bold" }}>
              {props.complexity.toUpperCase()}
            </Text>
            <Text style={{ fontFamily: "open-sans-bold" }}>
              {props.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  mealRow: {
    flexDirection: "row"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  mealHeader: {
    height: "85%",
    alignItems: "center"
  },
  mealDetail: {
    height: "15%",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  }
});

export default MealItem;
