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
          <Header currentScr='gridview' pressMe={() => this.props.navigation.navigate('Details')}/>
          <Container>
              <Content>
                  <GridViewComponent/>
              </Content>
          </Container>
        </View>
        
         );
    }
  }

