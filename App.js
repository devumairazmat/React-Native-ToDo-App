import { StyleSheet , fromText, View, Text } from 'react-native'
import React from 'react'

export default function App()  {
  
    return (
      <View style={styles.container}>
        <Text style={{color: 'white'}}>App</Text>
      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})