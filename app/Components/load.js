import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TextInput,TouchableOpacity } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import {lista} from './list.json'
import style from './styles'
import database from './database'


export default class Load extends Component {
  
  state = {
    hasCameraPermission: null,
    value:"",
    codigo:"",
    us:"",
    data:[],
  };

  setData(d){
    // this.setState({data:d})
    console.log(d)
  }
  componentDidMount() {
    this._requestCameraPermission();
    console.log("l")
    this.setData=this.setData.bind(this)
    database.st=this.setData
    database.selectAll()
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    console.log(this.state.us)
    if(this.state.us===""){
      console.log(this.state.us,"paso")
      this.setState({codigo:data.data})
      if(this.data.findIndex(list=>list.id===data.data)>=0){
        this.setState({us:"LISTO"})
        setInterval(()=>{this.setState({us:""})},3000)
      }else{
        this.setState({us:"INTRODUZCA NOMBRE"})

      }
    }
   
  };

  add(){
    if(this.state.us==="INTRODUZCA NOMBRE"){
      console.log({name:this.state.text,id:this.state.codigo})
      database.insert({name:this.state.text,id:this.state.codigo})
      this.setState({us:"",codigo:"",text:""})
    }

  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize:24,color:'red'}}>{this.state.us}</Text>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :

            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 200, width: 200 }}
            />
        }
        <TextInput
        style={{width: 250,height:40,fontSize:30, borderColor: 'gray'}}
        placeholder="introduzca el nombre"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
         />
         <Text>{this.state.codigo}</Text>
        <TouchableOpacity style={styles.button} onPress={this.add.bind(this)}>
              <Text style={{color:'#fff',fontSize:20,}}> Cargar </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create(style);
