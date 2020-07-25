import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import FilterSwitch from "../components/FilterSwitch";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";

const FiltersScreen = props => {
  const { navigation } = props;

  const dispatch = useDispatch();

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegeterian, setIsVegeterian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedfilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegeterian: isVegeterian,
      vegan: isVegan
    };
    dispatch(setFilters(appliedfilters));
    navigation.navigate("Categories");
  }, [isGlutenFree, isVegeterian, isVegan, isLactoseFree, dispatch]);

  useEffect(() => {
    props.navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        name="Gluten-free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        name="Lactose-free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        name="Vegeterian"
        state={isVegeterian}
        onChange={newValue => setIsVegeterian(newValue)}
      />
      <FilterSwitch
        name="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Burger"
          iconName="ios-save"
          onPress={() => {
            navData.navigation.getParam("save")();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  }
});

export default FiltersScreen;
