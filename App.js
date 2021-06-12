import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SqureScreen from "./src/screens/SqureScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Copmonent: ComponentsScreen,
    ListScreen:ListScreen,
    ImageScreen:ImageScreen,
    CounterScreen:CounterScreen,
    ColorScreen:ColorScreen,
    SqureScreen:SqureScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
