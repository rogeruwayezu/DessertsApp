import React, { Component } from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import  Header  from '../components/Header/Header';
import { TabNavigator } from 'react-navigation'
import { Container, Content } from 'native-base';
import CardComponent from '../components/CardComponent/CardComponent';
import { StackNavigator } from 'react-navigation';
import { Details } from '../screens/Details';

 class Home extends Component {
  
    render() {
     return (
        <View style={{flex: 1}}>
         <StatusBar translucent={false} barStyle="light-content" />
         
          {/* <Header/> */}
          <Container>
              <Content>
              
                <CardComponent />
            
              </Content>
          </Container>
          
        </View>
        
         );
    }
  }
  export default Home;