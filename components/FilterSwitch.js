import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import Colors from "../constants/Colors";

const FilterSwitch = props => {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Colors.accentColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10
  }
});

export default FilterSwitch;
