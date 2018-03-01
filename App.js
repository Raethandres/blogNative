import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import {HomeScreem,List,Details} from './app/Components/index'
import {StackNavigator} from 'react-navigation'
import {Provider} from "react-redux"
import store from "./app/redux/store"

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreem,
    },
    List: {
      screen: List,
    },
    Details:{
      screen: Details,
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#363636',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
export default class App extends React.Component {
  render() {
  return(
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
  }
}


