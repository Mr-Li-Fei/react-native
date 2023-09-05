import { Button, StyleSheet, View, } from 'react-native';
import React, { useState } from 'react';
import FlatGoalItem from './components/FlatGoalItem'
import ScrollGoalItem from './components/ScrollGoalItem'
import GoalInput from './components/GoalInput'
import GuessContent  from './components/GuessContent';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import InitPage from './components/InitPage';

// const Stack = createNativeStackNavigator();

const App = () => {
  const [isAddModal, setIsAddModal] = useState(false);
  const [isShowGuessModal, setIsShowGuessModal] = useState(false);

  const onModalHandler = () => {
    setIsAddModal(false);
  }

  const onCloseGuessModal = () => {
    setIsShowGuessModal(false)
  }

  return (
    <View style={{alignItems: 'center'}}>
      <View style={{paddingVertical: 20}}>
        <Button title='Add a GoalModal' onPress={() => {setIsAddModal(true)}}/>
      </View>
      <View style={{paddingVertical: 20}}>
        <Button title='Guess a number' onPress={() => {setIsShowGuessModal(true)}} />
      </View>
      <GoalInput 
        visible={isAddModal} 
        modalHandler={onModalHandler} 
        // goalHandler={addGoalHandler} 
      />
      <GuessContent 
        visible={isShowGuessModal} 
        closeGuessModal={onCloseGuessModal}
      />
      {/* 
        FlatList 组件 和ScrollView 组件不同
        前者是不出现再屏幕内的内容不会加载
        后者是整体全部加载，不管在不在屏幕内
      */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create();
