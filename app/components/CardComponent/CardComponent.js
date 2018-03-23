import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from './styles';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { List, ListItem, SearchBar } from "react-native-elements";


class CardComponent extends Component {

    state = {
        data: []
      };

    componentDidMount(){
        this.fetchData();
      }
      
      fetchData = async () => {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
        const json = await response.json();
        this.setState({data: json.meals});
      };


    render(){
        return (
                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                    <FlatList

                       data={this.state.data}
                        renderItem={({ item }) => (
                            <Card cardBody style={{flex:0.5}}>
                            <Thumbnail source={{uri: item.strMealThumb}} style={{height: 150, width: null,borderRadius: 0, flex:1}}/>
                                <CardItem>
                                    <Body >
                                        <Text>{item.strMeal}</Text>
                                         <View style={{flex: 0.3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <Text>{item.idMeal}</Text>
                                            <Image resizeMode='contain' style={styles.icon} source={require('./images/favorite.png')} />
                                         </View>
                                    </Body>
                                </CardItem>
                            </Card>
                        )}
                        keyExtractor={item => item.idMeal}
                    />
                </List>

        );
    }
}

export default CardComponent;