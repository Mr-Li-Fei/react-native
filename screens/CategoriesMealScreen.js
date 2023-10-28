import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoriesMealScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>CategoriesMealScreen screen</Text>
    </View>
  )
}

export default CategoriesMealScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})