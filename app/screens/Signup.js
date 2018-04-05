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
        name:'',
        email: '',
        password: '',
    },
    errors: {},
    isSubmitting: false,   
}

const background = require("../components/TextField/images/signup_bg.png");
const mark = require("../components/TextField/images/login1_mark.png");
class Signup extends Component {

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
    let response;
    try {
        response = await this.props.mutate({
        variables: this.state.values,
    });
    } catch (err) {
        this.setState({
          errors: {
            email: 'Already taken',
          },
          isSubmitting: false,
        });
        return;
      }
    // await AsyncStorage.setItem("@demo/token", response.data.signup.token);

    console.log(response);
    this.setState(defaultState);
    this.props.navigation.navigate('Home');
};

goToLoginPage = () => {
    this.props.navigation.navigate('GridView');
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
     const {errors, values: {name, email, password}} = this.state;
     return (
        <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
           <ImageBackground source={background} style={{flex: 1, paddingTop: 30, width: null, height: null}} resizeMode="cover" >
         

                <View style={styles.markWrap}>
                  <Image source={mark} style={styles.mark} resizeMode="contain" />
                </View>
           
               <TextField 
                 onChangeText={value => this.onChangeText('name', value)}
                 value={name}
                /> 
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

const signUpMutation = gql`
mutation ($email: String!, $name: String!,  $password: String!){
  createUser(name: $name, authProvider: { email: { email: $email, password: $password } }){
   id
   name
   email
   password
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
  export default graphql(signUpMutation)(Signup)