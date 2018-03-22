import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Header from '../components/Header/Header'
import GridView from '../screens/GridView';
import Details from '../screens/Details'

 const RootStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions:{ header:null}
    },
    Details: {
        screen: Details,
        navigationOptions:{ header:null}
    },
    GridView: {
        screen: GridView,
        navigationOptions:{ header:null}
    },     
},
{
    initialRouteName: 'Home',
},


);
export default class Root extends React.Component {
  render() {
    return <RootStack />;
  }
}