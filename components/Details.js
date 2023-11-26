import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Details = ({ route, navigation }) => {
  const { id, msg, num } = route.params;
  return (
    <View>
      {/* <Button title="Add Num" onPress={func()} /> */}
      <Text>{num}</Text>
      {/* 官网推荐使用JSON.stringify() */}
      <Text style={styles.colors}>{JSON.stringify(id)}</Text>
      <Text style={styles.colors}>{JSON.stringify(msg)}</Text>
      {/* 能够通过navigation.setParams() 更改params */}
      <Button title="Update Params" onPress={()=> navigation.setParams({id: 'updateDetails'})}/>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    colors: {
        color: 'red',
    }
})