import React, { Component } from 'react';
import { View, Text } from 'react-native';
import  Header  from '../components/Header/Header';
import { TabNavigator } from 'react-navigation'
import { Container, Content } from 'native-base';
import GridViewComponent from '../components/GridViewComponent/GridViewComponent'
import { Button } from 'react-native-elements';


export default class GridView extends Component {
  
    render() {
     return (
        <View >
          <Text>Hello</Text>
          <Button 
            title="Go to Home"
            onPress= {() => this.props.navigation.goBack()}
            />
        </View>
        
         );
    }
  }

