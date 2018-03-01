import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Platform,
  Text,
  Image,
  ScrollView
} from 'react-native';
import style from './styles'


export default class Details extends React.Component {
  
  constructor(props){
    super(props)
  }
  
  render() {
    const { params } = this.props.navigation.state;

    return (
      
      <View style={styles.container}>
      <ScrollView key="scrollViewSnap" snapToInterval={210.0} pagingEnabled>

      <Text style={{fontSize:40,textAlign:'left',}} >{params.title}</Text>
      <Image
          style={{
            alignSelf: 'center',
            height: 150,
            width: 150,
            borderWidth: 1,
          }}
          resizeMode="stretch"
          source={{uri:params.img}}
        />
      <Text style={{fontSize:30,textAlign:'left',}}>{params.subtitle}</Text>
      <Text/>
      <Text>{params.text}</Text>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create(style);
