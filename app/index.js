import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View } from 'react-native';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';

import  GridView from "./screens/GridView";
import Home from "./screens/Home";
import Header from './components/Header/Header'

import  Root  from "./config/Routes";

const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjfb78jkf8ffi0185cxjwgrhu' }),
    cache: new InMemoryCache(),
  });


class App extends Component{
    render() {

        return (
        <View style={{flex:1}}>
            <ApolloProvider client={client}>
               <Root/>
            </ApolloProvider>
        </View>
        );
    }
}

EStyleSheet.build({
    $primaryColor: '#4F6D7A',
})

export default App;

