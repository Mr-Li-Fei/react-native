import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native'
import React from 'react'

export default function FlatGoalItem(props) {
  return (
    <FlatList
        style={{width: '90%', paddingHorizontal: 50,}}
        data={props.courseGoals}
        renderItem={(itemData) => (
          <TouchableHighlight>
            <View style={styles.listItem}>
                {/* 因为Text 支持的样式太少了，所以使用View 包裹一下 */}
                <Text>{itemData.item}</Text>
            </View>
          </TouchableHighlight>
        )}
    />
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