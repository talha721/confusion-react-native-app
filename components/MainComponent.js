import React, { Component, useState } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import { View } from "react-native";

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dishes: DISHES,
//       selectedDish: null,
//     };
//   }
//
//   onDishSelect(dishId) {
//     this.setState({ selectedDish: dishId });
//   }
//
//   render() {
//     return (
//       <View>
//         <Menu
//           dishes={this.state.dishes}
//           onPress={(dishId) => this.onDishSelect(dishId)}
//         />
//         <DishDetail
//           dish={
//             this.state.dishes.filter(
//               (dish) => dish.id === this.state.selectedDish
//             )[0]
//           }
//         />
//       </View>
//     );
//   }
// }

const Main = () => {
  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };

  return (
    <View>
      <Menu dishes={dishes} onPress={(dishId) => onDishSelect(dishId)} />
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
    </View>
  );
};

export default Main;
