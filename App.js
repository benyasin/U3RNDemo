import './shim'
import React, { Component } from 'react'
import { StyleSheet, YellowBox, SafeAreaView, Text } from 'react-native'
import { createU3, U3Utils } from 'u3.js'

class App extends Component {
  constructor(props) {
    super(props)
    YellowBox.ignoreWarnings(['Remote Debugger'])
    console.disableYellowBox = true
    this.state = {
      info: null,
    }
  }

  async UNSAFE_componentWillMount() {
    const config = {
      httpEndpoint: 'https://ultrainio.ultrain.info',
      httpEndpointHistory: 'https://history-ultrainio.ultrain.info',
      chainId: '99b1cef2acdf6c4bcbce64c6490a999b819c236b19e3cd7cd2c3accc71da30ef',
    }
    const u3 = createU3(config)
    const info = await u3.getChainInfo()
    this.setState({
      info,
    })
    console.log(info)
  }

  render() {
    return <SafeAreaView style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>U3集成示例：</Text>
      <Text>
        {JSON.stringify(this.state.info)}
      </Text>
    </SafeAreaView>
  }
}

export default App
