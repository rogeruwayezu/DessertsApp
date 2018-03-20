import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import  GridView from "./screens/GridView";
import Home from "./screens/Home";

EStyleSheet.build({
    $primaryColor: '#4F6D7A',
})

export default () => <GridView/>;

