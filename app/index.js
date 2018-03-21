import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import  GridView from "./screens/GridView";
import Home from "./screens/Home";
import { Tabs } from "./config/routes";


class App extends Component{
    render() {
        return <Tabs />
    }
}

EStyleSheet.build({
    $primaryColor: '#4F6D7A',
})

export default App;

