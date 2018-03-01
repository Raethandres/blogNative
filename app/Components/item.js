import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import style from './styles'


export default class Item extends React.Component {
  
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      
      <View style={styles.container}>
      <TouchableOpacity
      style={styles.button}
      onPress={() => {this.props.navigate('Details', {
              img:this.props.img,
              text:this.props.text,
              title:this.props.title,
              subtitle:this.props.subtitle,
            })}}
      >
      <Text style={{color:'#fff',fontSize:30,}}> {this.props.title} </Text>
    </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create(style);
