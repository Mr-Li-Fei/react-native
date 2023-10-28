import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesScreen = (props) => {
  return (
    <View style={screen}>
      <Text>CategoriesScreen screen!</Text>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})