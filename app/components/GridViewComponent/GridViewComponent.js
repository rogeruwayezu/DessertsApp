import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from './styles';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';


class GridViewComponent extends Component {
    render(){
        return (

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Card cardBody style={{flex:0.5}}>
                <Image  source={require('./images/food.jpg')} style={{height: 100, width: null, flex:1}}/>
                <CardItem>
                <Body >
                      <Text>Pizza is not good for Health</Text>
                      <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text>234</Text>
                        <Image resizeMode='contain' style={styles.icon} source={require('./images/favorite.png')} />
                      </View>
            
                </Body>
                </CardItem>
            </Card>
            <View style={{flex: 0.01}}>

            </View>

            <Card cardBody style={{flex:0.5}}>
               <Image  source={require('./images/chicken.jpg')} style={{height: 100, width: null, flex:1}}/>
                <CardItem>
                    <Body >
                        <Text>Pizza is not good for Health</Text>
                         <View style={{flex: 0.3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text>234</Text>
                            <Image resizeMode='contain' style={styles.icon} source={require('./images/favorite_border_black.png')} />
                         </View>
                    </Body>
                </CardItem>
            </Card>
        </View>
        );
    }
}

export default GridViewComponent;