import React, { Component } from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';
import { Input, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { actions } from '../store'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

class PostCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      latitude: '',
      longitude: '',
      url: '',
    }
  }
  _send = () => {
    const { name, address, latitude, longitude, url } = this.state
    ///VALIDACIONES
    this.props.createPost({ name, address, latitude, longitude, url }).then(() => {
      this.props.navigation.goBack()
    })
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
          style={[styles.content, { height, width }]}
          source={require('../assets/images/sakurafondo.jpg')}
        >
          <Input
            placeholder='Lugar de Vacunación'
            inputContainerStyle={{
              // width: width * 0.8, alignItems: 'flex-start',
              alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)'
            }}
            inputStyle={{ color: 'white', marginLeft: 15 }}
            placeholderTextColor='#ccc'
            value={this.state.name}
            onChangeText={(value) => this.setState({ name: value })}
          />
          <Input
            placeholder='Dirección'
            inputContainerStyle={{
              // width: width * 0.8, alignItems: 'flex-start',
              alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)',
              pading: 15
            }}
            inputStyle={{ color: 'white', marginLeft: 15 }}
            placeholderTextColor='#ccc'
            value={this.state.address}
            onChangeText={(value) => this.setState({ address: value })}
            // multiline
            // numberOfLines={2}
          />
          <Input
            placeholder='Latitud'
            inputContainerStyle={{
              // width: width * 0.8, alignItems: 'flex-start',
              alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)'
            }}
            inputStyle={{ color: 'white', marginLeft: 15 }}
            placeholderTextColor='#ccc'
            value={this.state.latitude}
            onChangeText={(value) => this.setState({ latitude: value })}
            // multiline
            // numberOfLines={2}
          />
          <Input
            placeholder='Longitud'
            inputContainerStyle={{
              // width: width * 0.8, alignItems: 'flex-start',
              alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)'
            }}
            inputStyle={{ color: 'white', marginLeft: 15 }}
            placeholderTextColor='#ccc'
            value={this.state.longitude}
            onChangeText={(value) => this.setState({ longitude: value })}
            // multiline
            // numberOfLines={2}
          />
          <Input
            placeholder='Url de imagen'
            inputContainerStyle={{
              // width: width * 0.8, alignItems: 'flex-start',
              alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)'
            }}
            inputStyle={{ color: 'white', marginLeft: 15 }}
            placeholderTextColor='#ccc'
            value={this.state.url}
            onChangeText={(value) => this.setState({ url: value })}
            multiline
            numberOfLines={3}
          />
          <TouchableOpacity
                onPress={() => this._send()}
                style={[
                  styles.button,                 
                ]}
                >
                <Text>Guardar</Text>
          </TouchableOpacity>
          
        </ImageBackground>
        {/* </View> */}
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    // color:'#fff',
    textAlign: 'center'
  },
  content: {
    margin: width / 20,
    height: width / 2.5,
    width: width / 2.5,
    borderRadius: 15,
    justifyContent: 'center',
   
  },
  button: {
    backgroundColor: 'rgba(165, 105, 189, 0.5)',
    margin: width / 20,
    width: width/2,
    marginLeft: 90,    
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
})
const mapDispatchToProps = dispatch => ({
  createPost: (data) =>
    dispatch(actions.posts.createPost(data)),
})
const mapStateToProps = state => ({
 
})
export default connect(mapStateToProps, mapDispatchToProps)((PostCreate))