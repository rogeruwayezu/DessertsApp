import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';


 class Header extends Component{
 
    render(){ 
      const { onPress, pressMe, screen} = this.props
        return(
      <View style={styles.viewStyle}> 
            <Image resizeMode='contain' style={styles.icon} source={require('./images/settings.png')} />
            <View style={styles.smallContainer}>
            <TouchableOpacity 
              onPress= {onPress}
                >
               <Image resizeMode='contain' style={currentScr === "gridview"? styles.iconBar : styles.icon} source={require('./images/stream.png')} />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress= {pressMe}
                >
              <Image resizeMode='contain' style={currentScr === "all"? styles.iconBar : styles.icon} source={require('./images/dashboard.png')} />
            </TouchableOpacity>
            </View>
            
            <Image resizeMode='contain' style={styles.icon} source={require('./images/search.png')} />
     
      </View>

        )
    }
}

export default Header;