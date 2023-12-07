import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

function Setting({ navigation }) {
    return (
      <View>
        <Text>Here is the Settings</Text>
        <Button title="go to Details" onPress={() => { navigation.navigate('Details')}}></Button>
      </View>
    )
}

export default Setting;
  
const styles = StyleSheet.create({})