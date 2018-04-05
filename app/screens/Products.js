import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Products extends Component{
    render() {

        return (
        <View style={{flex:1}}>
            <Text>This is the Products page</Text>
              <Button title="create product" onPress={}  />
           
        </View>
        );
    }
}

export default Products;