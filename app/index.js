import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View } from 'react-native';
import  GridView from "./screens/GridView";
import Home from "./screens/Home";
import  Root  from "./config/Routes";
import Header from './components/Header/Header'
class App extends Component{
    render() {

        return (
        <View style={{flex:1}}>
            <Root/>
        </View>
        );
    }
}

EStyleSheet.build({
    $primaryColor: '#4F6D7A',
})

export default App;

