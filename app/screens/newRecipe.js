import React, { Component } from 'react';
import { Image, Button, View } from 'react-native';
import { ImagePicker } from 'expo';

import TextField from '../components/TextField/TextField';

const defaultState = {
  values: {
    name: '',
    url: '',
  },
  errors: {},
  isSubmitting: false,
};

class NewRecipe extends Component {
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
    if (this.state.isSubmitting) {
      return;
    }

    this.setState({ isSubmitting: true });
    let response;
    try {
      response = await this.props.mutate({
        variables: this.state.values,
      });
    } catch (err) {
      // this.setState({
      //   errors: {
      //     email: 'Already taken',
      //   },
      //   isSubmitting: false,
      // });
      // return;
    }

    // await AsyncStorage.setItem(TOKEN_KEY, response.data.signup.token);
    // this.setState(defaultState);
    this.props.navigation.navigate('Home');


    
  };

  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.onChangeText('url', result.uri);
    }
  };

  render() {
    const { values: { name, url } } = this.state;

    return (
      <View
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
         
        }}
      >
        <View style={{ width: 200 }}>
          <TextField value={name} name="name" onChangeText={this.onChangeText} />
          <TextField value={url} name="url" onChangeText={this.onChangeText} />
          <Button title="Add Recipe" onPress={this.submit} />
        </View>
      </View>
    );
  }
}





export default NewRecipe;