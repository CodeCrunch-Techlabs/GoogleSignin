import React, { Component } from "react";
import {View} from "react-native";

import HomeScreen from "./Home";
import LoginScreen from "./Login";

import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Login: LoginScreen,
    },
    {
        initialRouteName: 'Login',
    }
);

const AppContainer = createAppContainer(RootStack);

class App extends Component {
    render() {
        return <AppContainer />;
    }
}

export default App;