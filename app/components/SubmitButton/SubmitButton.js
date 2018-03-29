import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';


class SubmitButton extends Component {
    render() {
      return (
            <View style={styles.footerContainer}>
              <TouchableOpacity>
                <View style={styles.signup}>
                  <Text style={styles.whiteFont}>Join</Text>
                </View>
              </TouchableOpacity>
  
              <TouchableOpacity>
                <View style={styles.signin}>
                  <Text style={styles.greyFont}>Already have an account?<Text style={styles.whiteFont}> Sign In</Text></Text>
                </View>
              </TouchableOpacity>
            </View>
      );
    }
  }


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
  
  export default SubmitButton;