import React, { Component } from 'react';
import PropTypes from "prop-types";
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';


class SubmitButtonSignin extends Component {
    render() {
      const { signupPage } = this.props
      return (
            <View style={styles.footerContainer}>
              <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.signup}>
                  <Text style={styles.whiteFont}>Signin</Text>
                </View>
              </TouchableOpacity>
  
              <TouchableOpacity onPress= { signupPage }> 
                <View style={styles.signin}>
                  <Text style={styles.greyFont}>Don't have an account?<Text style={styles.whiteFont}> Sign Up</Text></Text>
                </View>
              </TouchableOpacity>


            </View>
      );
    }
  };

  SubmitButtonSignin.propTypes = {
    onPress: PropTypes.func,
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
      width: 30,
      height: 30,
    },
    input: {
      flex: 1,
      fontSize: 20,
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
  
  export default SubmitButtonSignin;