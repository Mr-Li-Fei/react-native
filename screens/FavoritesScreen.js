import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FavoritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>FavoritesScreen, screen!</Text>
    </View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})