import React, { Component } from 'react';
import { AsyncStorage, TextInput, View, StyleSheet, Button, Text } from 'react-native';
import { graphql} from 'react-apollo';
import gql from 'graphql-tag';
import TextField from "../components/TextField/TextField";
import SubmitButton from "../components/SubmitButton/SubmitButton";

const defaultState = {
    values: {
        name:'',
        email: '',
        password: '',
    },
    errors: {},
    isSubmitting: false,   
}

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
         
            <SubmitButton/>
           
 
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