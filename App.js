/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { createU3, ecc } from 'u3.js/src'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

type
Props = {}
export default class App extends Component<Props> {

  constructor (props) {
    super(props)
    this.state = {
      chainInfo: null
    }
  }

  async componentDidMount () {
    const u3 = createU3()
    await u3.getChainInfo((err, info) => {
      if (err) throw err
      this.setState({
        chainInfo: JSON.stringify(info)
      })
    })

    let result = ecc.generateKeyPairWithMnemonic()
    console.log(result)

    const keyProvider = () => {
      return ['5JbedY3jGfNK7HcLXcqGqSYrmX2n8wQWqZAuq6K7Gcf4Dj62UfL']
    }
    const tr = await u3.contract('utrio.token')
    await tr.transfer('ben', 'bob', '1.0000 UGAS', '', {keyProvider})
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to U3RNDemo!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <Text style={styles.chainInfo}>{this.state.chainInfo}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  chainInfo: {
    marginTop: 30,
    textAlign: 'left',
    color: '#875643',
    marginBottom: 5,
    marginHorizontal: 20
  }
})
