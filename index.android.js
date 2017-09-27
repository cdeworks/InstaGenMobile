/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList 
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class InstAluraMobile extends Component {
  render() {
    const fotos = [
      {id: 1, usuario: 'daniel'},
      {id: 2, usuario: 'alberto'},
      {id: 3, usuario: 'vitor'}
    ];

    return (
      <FlatList style={{marginTop: 20}}
                keyExtractor={item => item.id}
                data={fotos}
                renderItem={ ({item}) =>
                    <View>
                        <Text>{item.usuario}</Text>
                        <Image source={require('./resources/img/gatinho.png')}
                            style={{width: width, height: width}} />        
                    </View>
                }
            />
    );
  }
}

AppRegistry.registerComponent('InstAluraMobile', () => InstAluraMobile);
