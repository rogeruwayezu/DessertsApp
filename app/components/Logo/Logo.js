import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Image, Text, Keyboard, Animated, Platform, StyleSheet} from 'react-native';
import styles from './styles';

const mark = require("../TextField/images/login1_mark.png");
const ANIMATION_DURATION = 250;

class Logo extends Component {
   

          render() {
        
        return (
           
              <View style={styles.markWrap}>
                <Image source={mark} style={styles.mark} resizeMode="contain" />
              </View>
            
           
        );
      }
    }
     

export default Logo;

