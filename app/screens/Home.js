import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
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
          <Header currentScr="all" onPress={() => this.props.navigation.navigate('Home')} pressMe={() => this.props.navigation.navigate('GridView')}/>
          <Container>
              <Content>
              <TouchableOpacity onPress= {() => this.props.navigation.navigate('Details')}>
                  <CardComponent />
              </TouchableOpacity>
              </Content>
          </Container>
          
        </View>
        
         );
    }
  }
  export default Home;