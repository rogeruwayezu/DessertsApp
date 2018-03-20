import React, { Component } from 'react';
import { View } from 'react-native';
import  Header  from '../components/Header/Header';
import { TabNavigator } from 'react-navigation'
import { Container, Content } from 'native-base';
import CardComponent from '../components/CardComponent/CardComponent'
export default class Home extends Component {
  
    render() {
     return (
        <View style={{flex: 1}}>
          <Header />
          <Container>
              <Content>
                  <CardComponent/>
              </Content>
          </Container>
        </View>
        
         );
    }
  }

