import React, { useState } from 'react';
import { Button, StyleSheet, View, Text} from 'react-native';

// import FlatGoalItem from './FlatGoalItem'
// import ScrollGoalItem from './ScrollGoalItem'
import GoalInput from './GoalInput'
import GuessContent  from './GuessContent';


export default function Home(props) {
    const [isAddModal, setIsAddModal] = useState(false);
    const [isShowGuessModal, setIsShowGuessModal] = useState(false);
    const [num, setNum] = useState(0);

    const addNum = () => {
        console.log(';run');
        setNum(9);
    }
  
    const onModalHandler = () => {
      setIsAddModal(false);
    }
  
    const onCloseGuessModal = () => {
      setIsShowGuessModal(false)
    }

    return (
        <View style={{alignItems: 'center'}}>
            <Button title='go to Details' onPress={() => props.navigation.navigate('Details', {
                // id: 'details',
                msg: 'more details is coming...',
                data: num,
                // 不能传输函数？？？？？
                // func: addNum,
            })}/>
            <Button title='go to HeaderTitle' onPress={() =>　props.navigation.navigate('HeaderTitle')}/>
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
    )
}

const styles = StyleSheet.create({})