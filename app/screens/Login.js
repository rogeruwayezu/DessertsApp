import React, { Component } from 'react';
import { AsyncStorage, TextInput, View, StyleSheet, Button, Text, ImageBackground, Image,  KeyboardAvoidingView } from 'react-native';
import { graphql} from 'react-apollo';
import gql from 'graphql-tag';
import TextField from "../components/TextField/TextField";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import EmailField from "../components/EmailField/EmailField";
import PassWordField from "../components/PassWordField/PassWordField";

const defaultState = {
    values: {
        email: '',
        password: '',
    },
    errors: {},
    isSubmitting: false,   
}

const background = require("../components/TextField/images/signup_bg.png");
const mark = require("../components/TextField/images/login1_mark.png");


class Login extends Component {

    state = defaultState;

onChangeText = (key, value) => {
        this.setState(state => ({
          values: {
              ...state.values,
              [key]: value,
          },
        }));
    };
  
submit = async () => {
    // console.log(this.state.values)
    if (this.state.isSubmitting){
        return;
    }

    this.setState(({ isSubmitting: true }));
       const response = await this.props.mutate({
        variables: this.state.values,
    });
    
    // await AsyncStorage.setItem("@demo/token", response.data.login.token);

    console.log(response);
    this.setState(defaultState);
    this.props.navigation.navigate('Home');
};

goToSignupPage = () => {
    this.props.navigation.navigate('Signup');
};

onChangeText = (key, value) => {
    this.setState(state => ({
      values: {
          ...state.values,
          [key]: value,
      },
    }));
};
  
    render() {
     const {errors, values: { email, password }} = this.state;
     return (
        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
           <ImageBackground source={background} style={{flex: 1, paddingTop: 30, width: null, height: null}} resizeMode="cover" >

                <View style={styles.markWrap}>
                  <Image source={mark} style={styles.mark} resizeMode="contain" />
                </View>
                
               <EmailField
                 onChangeText={value => this.onChangeText('email', value)}
                 value={email}
               />
                 
               <PassWordField 
                 onChangeText={value => this.onChangeText('password', value)}
                  secureTextEntry
                  value={password}
               />
               <SubmitButton 
                  onPress={this.submit}
                />

           </ImageBackground>
           <View style={{ height: 15, backgroundColor: 'rgba(52, 52, 52, 0.7)' }} />
           </KeyboardAvoidingView>
        
         );
    }
  }


const loginMutation = gql`
mutation ($email: String!, $password: String!) {
       signinUser(email: { email: $email, password: $password }){
           token
         }
   }
`;


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    markWrap: {
      flex: 1,
      paddingVertical: 30,
    },
    mark: {
      width: null,
      height: null,
      flex: 1,
    },
   
    wrapper: {
      paddingVertical: 30,
    },
    inputWrap: {
      flexDirection: "row",
      marginVertical: 10,
      height: 40,
      borderBottomWidth: 1,
      borderBottomColor: "#CCC"
    },
    iconWrap: {
      paddingHorizontal: 7,
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      height: 20,
      width: 20,
    },
    input: {
      flex: 1,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: "#FF3366",
      paddingVertical: 20,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    buttonText: {
      color: "#FFF",
      fontSize: 18,
    },
    forgotPasswordText: {
      color: "#D8D8D8",
      backgroundColor: "transparent",
      textAlign: "right",
      paddingRight: 15,
    },
    signupWrap: {
      backgroundColor: "transparent",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    accountText: {
      color: "#D8D8D8"
    },
    signupLinkText: {
      color: "#FFF",
      marginLeft: 5,
    }
  });
  export default graphql(loginMutation)(Login)