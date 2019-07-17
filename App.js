import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createU3, U3Utils } from 'u3.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chainInfo: null,
    };
  }

  async componentDidMount() {
    const u3 = createU3();
    let info = await u3.getChainInfo();
    this.setState({
      chainInfo: JSON.stringify(info),
    });

    let result = U3Utils.ecc.generateKeyPairWithMnemonic();

    console.log(result);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to U3RNDemo!</Text>
        <Text style={styles.instructions}>getChainInfo</Text>
        <Text>{this.state.chainInfo}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  chainInfo: {
    marginTop: 30,
    textAlign: 'left',
    color: '#875643',
    marginBottom: 5,
    marginHorizontal: 20,
  },
});
