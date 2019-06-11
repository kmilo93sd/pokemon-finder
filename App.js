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
  Image,
} from 'react-native';
import axios from "axios";

const message = "Bienvenido a PokeFinder";

const getPokemonByName = async (pokemonToFind) => {

  const endpoint = 'https://pokeapi.co/api/v2/pokemon/' + pokemonToFind.toLowerCase();

  return await axios.get(endpoint)
      .then(
          response => {
            return response.data
          }
      )
      .catch(
          error => {
            return error
          }
      );
};


export default class App extends Component{
  constructor() {
    super();
    this.state = {
      pokemonToFind: '',
      pokemon: {}
    };
  }

  handlePress = async () => {
    if (!this.state.pokemonToFind) {
      alert("WTF nigga, write the fucking pokimom!")
      return;
    }

    const pokemonFound = await getPokemonByName(this.state.pokemonToFind)
        .then( data => {
            return data;
        })
        .catch( error => {
          alert(error)
        });

      this.setState({
          pokemon: {
              id: pokemonFound.id,
              name: pokemonFound.name,
              height: (pokemonFound.height * 10)/100 + ' m',
              weight: (pokemonFound.weight * 10)/1000 + ' kg',
              type: pokemonFound.types[0].type.name,
              image: pokemonFound.sprites.front_default
          }
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{ message }</Text>
        <TextInput
            placeholder="¿Que pokemon buscas?"
            onChangeText={(pokemonToFind) => this.setState({pokemonToFind})}
        />
        <TouchableHighlight
            style={styles.button}
            onPress={this.handlePress}
        >
          <Text style={[styles.buttonFont]}>Buscar</Text>
        </TouchableHighlight>
          <Text>{ 'Número: ' + this.state.pokemon.id }</Text>
        <Text>{ 'Nombre: ' + this.state.pokemon.name }</Text>
         <Text>{ 'Altura: ' + this.state.pokemon.height}</Text>
         <Text>{ 'Peso: ' + this.state.pokemon.weight }</Text>
         <Text>{ 'Tipo: ' + this.state.pokemon.type }</Text>
         <Image
             style={{width: 200, height: 200}}
             source={ {uri: this.state.pokemon.image }}
         />
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
