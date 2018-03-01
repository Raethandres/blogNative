import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  Button,
  ActivityIndicator
} from 'react-native';
import style from './styles'
import List from './list'
import { connect } from 'react-redux';
import { fetchData, RefetchData } from '../redux/actions/listActions'

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    console.log(navigation)
    return {
      title: 'Home',
      headerRight: (
      <Button
        onPress={() => params.reFech()}
        title="Info"
        color="#fff"
      />
    ),
    };
  };

  _reFech(){
    this.props.dispatch(RefetchData())
    this.props.dispatch(fetchData())
  }

  componentWillMount(){
    this._reFech=this._reFech.bind(this)
    this.props.navigation.setParams({ reFech: this._reFech });
  }
  componentDidMount(){
    this.props.dispatch(fetchData())
  }

  render() {
    let isFech=this.props.fech
    return (
      
      <View style={styles.container}>
      <Text style={{color:'#2E393D',fontSize:50,}}> WELCOME </Text>
      <Text style={{color:'#2E393D',fontSize:15,}}> press on one item to see detaill</Text>
      {isFech ? (
        <List items={this.props.list} navigate={this.props.navigation.navigate}/>
      ) : (
        <ActivityIndicator animating={true} size="large" />
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create(style);

export default connect((store)=>{return{list:store.list.list,fech:store.list.fech}})(HomeScreen)
