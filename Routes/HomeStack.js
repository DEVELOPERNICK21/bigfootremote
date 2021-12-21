import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from "../Screens/Home/Home";
import Dashboard from "../Screens/Dashboard/Dashboard";

const screens = {
    Home : {
        screen: Home
    },
    DashBoard: {
        screen: Dashboard
    },
  
}

const HomeStack = createNativeStackNavigator(screens)

export default NavigationContainer(HomeStack)