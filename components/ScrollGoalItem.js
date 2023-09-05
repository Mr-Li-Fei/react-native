import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ScrollGoalItem(props) {
  return (
    <ScrollView style={{width: '90%', paddingHorizontal: 50,}}>
      {
        props.courseGoals.map((item, index) => (
          <TouchableOpacity setOpacityTo={0.7} key={index} onPress={props.onDelete.bind(this, index)}>
            <View style={styles.listItem}>
                {/* 因为Text 支持的样式太少了，所以使用View 包裹一下 */}
                <Text>{item}</Text>
                <Text>{index}</Text>
            </View>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#ccc',
        marginBottom: 10,
      },
})