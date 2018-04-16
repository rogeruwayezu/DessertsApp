import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { SearchBar } from 'react-native-elements';
import PropTypes from "prop-types";


 class SearchBar extends Component{
 
    render(){ 
      
        return(
      <View style={styles.viewStyle}> 
            
            <SearchBar
  showLoading
  platform="android"
  placeholder='Search' />
      </View>

        )
    }
}

export default SearchBar;