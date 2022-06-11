import React, { Component, useEffect } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import Reservation from "./ReservationComponent";
import {
  View,
  Platform,
  Image,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";
import {
  createDrawerNavigator,
  createStackNavigator,
  DrawerItems,
  SafeAreaView,
} from "react-navigation";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { fetchDishes } from "../redux/Actions/dishesAction";
import { fetchComments } from "../redux/Actions/commentsAction";
import { fetchLeaders } from "../redux/Actions/leadersAction";
import { fetchPromotions } from "../redux/Actions/promotionsAction";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromotions: () => dispatch(fetchPromotions()),
  fetchLeaders: () => dispatch(fetchLeaders()),
});

const MenuNavigator = createStackNavigator(
  {
    Menu: {
      screen: Menu,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <Icon
            name={"menu"}
            size={24}
            color={"white"}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
    Dishdetail: { screen: DishDetail },
  },
  {
    initialRouteName: "Menu",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTintColor: "#fff",
      headerTitleStyle: { color: "#fff" },
    },
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerTintColor: "#fff",
      headerLeft: (
        <Icon
          name={"menu"}
          size={24}
          color={"white"}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ContactNavigator = createStackNavigator(
  {
    Contact: { screen: Contact },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerTintColor: "#fff",
      headerLeft: (
        <Icon
          name={"menu"}
          size={24}
          color={"white"}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const AboutNavigator = createStackNavigator(
  {
    About: { screen: About },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerTintColor: "#fff",
      headerLeft: (
        <Icon
          name={"menu"}
          size={24}
          color={"white"}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const ReservationNavigator = createStackNavigator(
  {
    Reservation: { screen: Reservation },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#512DA8",
      },
      headerTitleStyle: {
        color: "#fff",
      },
      headerTintColor: "#fff",
      headerLeft: (
        <Icon
          name={"menu"}
          size={24}
          color={"white"}
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  }
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View style={styles.drawerHeader}>
        <View style={{ flex: 1 }}>
          <Image
            source={require("./images/logo.png")}
            style={styles.drawerImage}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: "Home",
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name={"home"}
            size={24}
            type={"font-awesome"}
            color={tintColor}
          />
        ),
      },
    },
    Menu: {
      screen: MenuNavigator,
      navigationOptions: {
        title: "Menu",
        drawerLabel: "Menu",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name={"list"}
            size={24}
            type={"font-awesome"}
            color={tintColor}
          />
        ),
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title: "Contact",
        drawerLabel: "Contact",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name={"address-card"}
            size={22}
            type={"font-awesome"}
            color={tintColor}
          />
        ),
      },
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        title: "About Us",
        drawerLabel: "About Us",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name={"info-circle"}
            size={24}
            type={"font-awesome"}
            color={tintColor}
          />
        ),
      },
    },
    Reservation: {
      screen: ReservationNavigator,
      navigationOptions: {
        title: "Reserve Table",
        drawerLabel: "Reserve Table",
        drawerIcon: ({ tintColor }) => (
          <Icon
            name={"cutlery"}
            size={24}
            type={"font-awesome"}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    drawerBackgroundColor: "#D1C4E9",
    contentComponent: CustomDrawerContentComponent,
  }
);

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromotions();
    this.props.fetchLeaders();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? 30 : 0,
        }}
      >
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  drawerHeader: {
    backgroundColor: "#512DA8",
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 62,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
