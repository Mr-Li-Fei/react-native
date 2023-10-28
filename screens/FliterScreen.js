
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FliterScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>FliterScreen screen!</Text>
    </View>
  )
}

export default FliterScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})