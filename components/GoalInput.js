import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native'
import React, { useState } from 'react'
import ScrollGoalItem from './ScrollGoalItem'


export default function GoalInput(props) {
  const [enterGoal, setEnterGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);


  const goalInputHandler = (enterText) => {
    setEnterGoal(enterText);
  }

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals, 
      // {key: Math.random().toString(), value: enterGoal}
      enterGoal,
    ]);
    setEnterGoal('');
  }

  const onModalHandler = () => {
    props.modalHandler()
    setEnterGoal('');
  }

  const removeGoalItem = (itemIndex) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((item, index) =>　itemIndex !== index);
    })
  }


  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={{alignItems: 'center'}}>
        <View style={styles.screen}>
          <TextInput
            placeholder="Course Goal..."
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enterGoal}
          />
          {/* <Button title='ADD' onPress={() =>　props.goalHandler(enterGoal)}/> */}
          {/* .bind() 改变指向， 不会立即执行， 所以返回的是一个函数给onPress */}
          <Button title='ADD' onPress={() => addGoalHandler()}/>
          <Button title='CANCEL' color='red' onPress={() => onModalHandler()} />
        </View>
        {/* <FlatGoalItem courseGoals={courseGoals} /> */}
        <ScrollGoalItem  onDelete={removeGoalItem} courseGoals={courseGoals} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    screen: {
        width: '90%',
        padding: 50,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1, 
        marginBottom: 5,
        marginRight: 5,
      },
    })