import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from './styles';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';
import { List, ListItem, SearchBar } from "react-native-elements";
import PropTypes from "prop-types";


import { graphql} from 'react-apollo';
import gql from 'graphql-tag';

class CardComponent extends Component {
    constructor(props){
        super(props)
        this.state= {
          text: '',
          data: null
        }
      }
      
    // componentDidMount(){
    //     console.log(this.state.data)
    //     // this.fetchData();
    //   }
      componentWillReceiveProps(nextProps) {
        //   console.log(nextProps.data.allRecipes)
        this.setState({
            data: nextProps.data.allRecipes
        })
    }
      
    //   fetchData = async () => {
    //     const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
    //     const json = await response.json();
    //     this.setState({data: json.meals});
       
    //   };

      search(text)  {
        // console.log(this.state.data[0])
        // console.log(text)
        this.setState({text: text})
        let recipesArray = this.state.data
        // for (const i = 0; i < recipesArray.length; i++){

        // }
        while(text){
            for(const i=0; i < recipesArray.length; i++){
                if (text === recipesArray[i].name){
                  this.setState({data: [recipesArray[i]]})
                }
              }
        }
        if(!text){
            this.setState({ data: this.state.data })
          }
        // alert(text)
      }
    


    render(){
        return (
        <View>
            <SearchBar
              lightTheme
              round
              onChangeText={(text) => this.search(text)}
              onPress={this.onSearch}
              placeholder='Type Here...' 
            />
       
                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                    <FlatList

                       data={this.state.data}
                        renderItem={({ item }) => (
                            <Card cardBody style={{flex:0.5}}>
                            <Thumbnail source={{uri: item.url}} style={{height: 150, width: null,borderRadius: 0, flex:1}}/>
                                <CardItem>
                                    <Body >
                                        <Text>{item.name}</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        )}
                        keyExtractor={item => item.id}
                    />
                </List>
        </View>               
        );
    }
}

CardComponent.propType= {
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.object,
      allRecipes: PropTypes.object,
    }).isRequired,
    };
    
    
const RecipeQuery = gql`
    query{
        allRecipes{
          id
          name
          url
        }
    }
`;

export default graphql(RecipeQuery)(CardComponent);