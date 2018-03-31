import React, { Component } from 'react';
import PropTypes from "prop-types";
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'


class EmailField extends Component {
    render() {
      return (
        <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
                <Image 
                  source={require("../TextField/images/signup_email.png")} 
                  style={styles.inputIcon} 
                  resizeMode="contain"
                />
            </View>
            <TextInput
                style={[styles.input, styles.whiteFont]}
                placeholder="Email"
                placeholderTextColor="#FFF" 
                underlineColorAndroid="transparent" 


             
               onChangeText={this.props.onChangeText}
               value={this.props.value}

            />
        </View>
      );
    }
  };

  EmailField.propTypes = {
    onChangeText: PropTypes.func,
    value: PropTypes.string,
};


  let styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bg: {
      paddingTop: 30,
      width: null,
      height: null
    },
    headerContainer: {
      flex: 1,
    },
    inputsContainer: {
      flex: 3,
      marginTop: 50,
    },
    footerContainer: {
      flex: 1
    },
    headerIconView: {
      marginLeft: 10,
      backgroundColor: 'transparent'
    },
    headerBackButtonView: {
      width: 25,
      height: 25,
    },
    backButtonIcon: {
      width: 25,
      height: 25
    },
    headerTitleView: {
      backgroundColor: 'transparent',
      marginTop: 25,
      marginLeft: 25,
    },
    titleViewText: {
      fontSize: 40,
      color: '#fff',
    },
    inputs: {
      paddingVertical: 20,
    },
    inputContainer: {
      borderWidth: 1,
      borderBottomColor: '#CCC',
      borderColor: 'transparent',
      flexDirection: 'row',
      height: 75,
    },
    iconContainer: {
      paddingHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputIcon: {
      width: 25,
      height: 25,
    },
    input: {
      flex: 1,
      fontSize: 15,
    },
    signup: {
      backgroundColor: '#FF3366',
      paddingVertical: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
    signin: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
  })
  
  export default EmailField;
  