import React, { Component } from 'react';
import { View } from 'react-native';
import  Header  from '../components/Header/Header';
import { TabNavigator } from 'react-navigation'
import { Container, Content } from 'native-base';
import GridViewComponent from '../components/GridViewComponent/GridViewComponent'


export default class GridView extends Component {
    render() {
     return (
        <View style={{flex: 1}}>
          <Header currentScr='gridview' onPress={() => this.props.navigation.navigate('Home')} pressMe={() => this.props.navigation.navigate('GridView')}/>
          <Container>
              <Content>
                  <GridViewComponent/>
              </Content>
          </Container>
        </View>
        
         );
    }
  }

