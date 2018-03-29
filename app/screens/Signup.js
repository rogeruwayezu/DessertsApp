import React, { Component } from 'react';
import { AsyncStorage, TextInput, View, StyleSheet, Button, Text, ImageBackground } from 'react-native';
import { graphql} from 'react-apollo';
import gql from 'graphql-tag';
import TextField from "../components/TextField/TextField";
import SubmitButton from "../components/SubmitButton/SubmitButton";
import EmailField from "../components/EmailField/EmailField";

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

class Signup extends Component {

    state = defaultState;
  
submit = async () => {
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
    await AsyncStorage.setItem("@demo/token", response.data.signup.token);

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
        <View style={{flex: 1}}>
           <ImageBackground source={background} style={{flex: 1, paddingTop: 30, width: null, height: null}} resizeMode="cover" >
               <TextField/> 
               <EmailField/>
               <SubmitButton/>
           </ImageBackground>
        </View>
        
         );
    }
  }

const signUpMutation = gql`
mutation($name: String!, $email: String!, $password: String!){
    signup(name: $name, email: $email, password: $password){
        token
    } 
}
`;
  export default graphql(signUpMutation)(Signup)