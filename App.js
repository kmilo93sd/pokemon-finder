/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const message = "Bienvenido a PokeFinder";

const handlePress = () => {
  alert("WTF nigga")
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{ message }</Text>
        <TextInput placeholder="¿Que pokemon buscas?" />
        <TouchableHighlight
            style={styles.button}
            onPress={handlePress}
        >
          <Text style={[styles.buttonFont]}>Buscar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#ff0008',
    height: 50,
    width: 100,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center'
  },
  buttonFont: {
    color: '#fff',
  }
});
