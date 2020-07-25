import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.some(
      meal => meal.key === itemData.item.key
    );

    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.key,
              mealTitle: itemData.item.title,
              isFav: isFavorite
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MealList;
