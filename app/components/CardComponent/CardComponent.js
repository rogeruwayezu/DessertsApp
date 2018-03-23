import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator } from "react-native";
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
                        <ListItem
                           title={`${item.strMeal}`}
                           avatar={{ uri: item.strMealThumb }}
                           containerStyle={{ borderBottomWidth: 0 }}
                          />
                        )}
                        keyExtractor={item => item.idMeal}
                    />
                </List>

        );
    }
}

export default CardComponent;