import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from './styles';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';


class CardComponent extends Component {
    render(){
        return (
            <Card cardBody>
                <Image  source={require('./images/food.jpg')} style={{height: 100, width: null, flex:1}}/>
                <CardItem>
                <Body style={{flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text>Pizza is not good for Health</Text>
                      <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>234</Text>
                        <Image resizeMode='contain' style={styles.icon} source={require('./images/favorite.png')} />
                      </View>
            
                </Body>
                </CardItem>
            </Card>
        );
    }
}

export default CardComponent;