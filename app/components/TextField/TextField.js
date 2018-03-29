import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Button, Text } from 'react-native';
import styles from './styles';


class TextField extends Component {

    onChangeText = (text) => {
        const { onChangeText, name } = this.props;
        onChangeText(name, text);
    };

    render(){
        const {
            value,
            secureTextEntry,
            name
        } = this.props;
     

        return (
            <TextInput 
                onChangeText={this.onChangeText} 
                value={value} 

                underlineColorAndroid="transparent" 
                style={styles.field} 
                placeholder={name}
                autoCapitalize="none"
                secureTextEntry={!!secureTextEntry}
            />
        );
    }
};

export default TextField