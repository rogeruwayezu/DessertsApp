import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Header from '../components/Header/Header'
import GridView from '../screens/GridView';

export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({ header: false })
    },
    GridView: {
        screen: GridView,
        navigationOptions: {
            tabBar: {
                header: ({ tintColor }) => <Header style={{color:'tintColor'}}/>
            }
        }
    }
},{
    header: 'null',
}
);