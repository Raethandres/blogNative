import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import {lista} from './list.json'
import style from './styles'
import Item from './item'

export default class List extends React.Component {
  
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      
      <View style={styles.container}>
        <ScrollView key="scrollViewSnap" snapToInterval={210.0} pagingEnabled>
          {this.props.items.map((title,i)=><Item  id={title.id} key ={i} title={title.title} text={title.text} img={title.img} subtitle={title.subtitle} navigate={this.props.navigate}/>)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create(style);
