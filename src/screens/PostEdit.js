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
import { ListItem } from 'react-native-elements/dist/list/ListItem';
import { connect } from 'react-redux'
import { actions } from '../store'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width


class PostEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      address: '',
      latitude: '',
      longitude: '',
      url: '',
    }
  }

  componentDidMount = () => {
    const {item} = this.props.route.params;
    if ({item}){
      this.setState({
        id: item.id,
        name: item.name,
        address: item.address,
        latitude: item.latitude,
        longitude: item.longitude,
        url: item.url,  
      })
    }
    
  }

  _updatePost = () => {  
    const { name, address, latitude, longitude, url } = this.state;     
    const {item} = this.props.route.params;
    const {_id} = item;
    
    console.log('***********')
    console.log(item)
    console.log('***********')
    ///VALIDACIONES
    this.props.updatePost({_id, name, address, latitude, longitude, url}).then(() => {
      //this.props.navigation.navigate('Posts') Tambien funciona con esta linea
      this.props.navigation.popToTop()
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
            inputContainerStyle={{
              // width: width * 0.8, alignItems: 'flex-start',
              alignSelf: 'center', backgroundColor: 'rgba(0,0,0,0.5)'
            }}
            inputStyle={{ color: 'white', marginLeft: 15 }}
            placeholderTextColor='#ccc'
            value={this.state.address}
            onChangeText={(value) => this.setState({ address: value })}
            // multiline
            // numberOfLines={2}
          />
           <Input
            
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
            
            inputContainerStyle={{
              // width: width * 0.8, alignItems: 'flex-start',
              alignSelf: 'center', height: height * 0.1, backgroundColor: 'rgba(0,0,0,0.5)'
            }}
            inputStyle={{ color: 'white', marginLeft: 15 }}
            placeholderTextColor='#ccc'
            value={this.state.url}
            onChangeText={(value) => this.setState({ body: value })}
            multiline
            numberOfLines={3}
          />
          <TouchableOpacity
                onPress={() => this._updatePost()}
                style={[
                  styles.button,                 
                ]}
                >
                <Text>Actualizar Post</Text>
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
  updatePost: (data) =>
    dispatch(actions.posts.updatePost(data)),
})
const mapStateToProps = state => ({
 
})
export default connect(mapStateToProps, mapDispatchToProps)((PostEdit))