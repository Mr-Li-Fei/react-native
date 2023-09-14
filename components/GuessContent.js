import { 
  Modal, 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import GuessScreen  from './GuessScreen';

export default function GuessContent(props) {
  const [inputNumber, setInputNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isOpenGuessScreen, setIsOpenGuessScreen] = useState(false);

  const inputHandler = (inputValue) => {
    // 替换所有非数字的输入
    setInputNumber(inputValue.replace(/[^0-9]/g, ''));
  };

  const confirmInputHandler = () => {
    if (inputNumber === '') {
      return Alert.alert('Invaild Input!', 'The input can not be empty!');
    
    }
    if (inputNumber > 100 || inputNumber < 0) {
      Alert.alert(
        'Invaild Input!', 
        'the input number must be bweteen 0 and 99!', 
        [{text: 'OK', onPress: resetInputHandler}]
        )
      return;
    }
    setIsChecked(true);
  }

  const resetInputHandler = () => {
    setInputNumber('');
    setIsChecked(false);
  }

  const closeModel = () => {
    props.closeGuessModal();
    resetInputHandler();
  }

  const openGuessScreen = () => {
     setIsOpenGuessScreen(true);
  }
  const onCloseGuessModal = (bool) => {
     setIsOpenGuessScreen(bool);
  }

  const oneStartGame = () => {
    setIsOpenGuessScreen(false);
    setIsChecked(false);
    setInputNumber('');
  }
  
  return (
    <Modal visible={props.visible} animationType='slide'>
      {
      /* 引入TouchableWithoutFeedBack  和 Keyboard api　任意实现点击非输入框的地方关闭键盘 */
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
          <View style={{ alignItems: 'center', height: '100%' }}>
            <View style={styles.header}>
              <Text style={{ color: "#fff" }}>Guess A Modal</Text>
            </View>
            <ScrollView style={{width: '100%', height: '100%'}}>
            {
              isOpenGuessScreen ? 
              <GuessScreen selectedNumber={inputNumber} closeGuessScreen={onCloseGuessModal} reStartGame={oneStartGame}/>
              : <View style={{ alignItems: 'center', height: '100%', width: '100%' }}>
                  <View style={styles.content}>
                    <View style={styles.input}>
                      <TextInput
                        maxLength={3}
                        value={inputNumber}
                        onChangeText={inputHandler} />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button title='guess' onPress={confirmInputHandler} />
                      <Button title="reset" onPress={resetInputHandler} />
                      <Button title="close" onPress={closeModel} />
                    </View>
                  </View>
                {
                  isChecked ? 
                    <View style={styles.card}>
                      <Text style={{ fontSize: 16 }}>Selected Number:</Text>
                      <View style={{
                        borderWidth: 2, 
                        borderColor: '#2196f3', 
                        borderRadius: 10, 
                        marginVertical: 10,
                        paddingVertical: 10,
                      }}><Text style={{textAlign: 'center'}}>{inputNumber}</Text></View> 
                      <Button title='Start Game' onPress={openGuessScreen}/>
                    </View>
                    : null
                }
              </View>
            }
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      }
      </Modal>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    //TODO:: 阴影未显示....
    // width: 300, 
    width: '80%', // 尽量使用百分比的表示方法，可以在不同尺寸的设备上样式基本统一
    minHeight: 300,
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#ddd',
    // justifyContent: 'center',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.26,
    // shadowRadius: 6,
  },
  input: {
    width:'70%',
    borderWidth: 1,
    marginVertical: 20,
  },
  buttonContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    width: '50%', // 百分比表示
    // height: 200,
    // marginTop: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 20,
  }
})