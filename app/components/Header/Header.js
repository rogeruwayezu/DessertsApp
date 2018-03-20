import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';


export default class Header extends Component{

    render(){
        return(
      <View style={styles.viewStyle}> 
            <Image resizeMode='contain' style={styles.icon} source={require('./images/settings.png')} />
            <View style={styles.smallContainer}>
              <Image resizeMode='contain' style={styles.iconBar} source={require('./images/stream.png')} />
              <Image resizeMode='contain' style={styles.icon} source={require('./images/dashboard.png')} />
            </View>
            
            <Image resizeMode='contain' style={styles.icon} source={require('./images/search.png')} />
     
      </View>

        )
    }
}

