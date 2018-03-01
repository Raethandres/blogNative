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
import List from './list'
import { connect } from 'react-redux';
import { fetchData } from '../redux/actions/listActions'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  componentDidMount(){
    this.props.dispatch(fetchData())
  }

  render() {
    return (
      
      <View style={styles.container}>
      <Text style={{color:'#2E393D',fontSize:50,}}> WELCOME </Text>
      <Text style={{color:'#2E393D',fontSize:15,}}> press on one item to see detaill</Text>
      <List items={this.props.list} navigate={this.props.navigation.navigate}/>
      </View>
    );
  }
}

const styles = StyleSheet.create(style);

export default connect((store)=>{return{list:store.list.list}})(HomeScreen)
