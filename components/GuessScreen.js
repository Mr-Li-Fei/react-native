import { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, Dimensions, Platform } from 'react-native'

  // 定义生成验证数字的函数
const genrateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    // if (rndNum === Number(exclude)) {
    //     console.log('successful');
    //     Alert.alert('Successful!', 'It\'s great! Get it!')
    // };
    return rndNum;
}

const GuessScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(genrateRandomBetween(1, 100, props.selectedNumber))
    const [currentWidth, setCurrentWidth] = useState(Dimensions.get('window').width);

    // useRef() 区别与useState(), useRef 保存的值不变， useState()保存的值是state, 用于界面交互的， 在组件更新渲染的时候会变
    let currentMin = useRef(1); 
    let currentMax = useRef(100);

    const onUpdateWidth = () => {
       setCurrentWidth(Dimensions.get('window').width);
    };

    useEffect(() => {
        if (currentGuess === Number(props.selectedNumber)) {
            console.log('successful');
            Alert.alert('Successful!', 'It\'s great! Get it!', [{text: 'Again', onPress:props.reStartGame}]);
        };
        const dimension = Dimensions.addEventListener('change', onUpdateWidth);
        console.log(dimension, 'run');
        return () => { dimension.remove(); }
    });

    const onJudgeDirection= (direction) => {
        if ((direction === 'lower' && currentGuess < Number(props.selectedNumber)) 
            || (direction === 'greater' && currentGuess > Number(props.selectedNumber)) ) {
               return Alert.alert('can\`t lie!', 'the guess number is not correct!')
            }
        
        if (direction === 'lower') {
            currentMax.current = currentGuess;
        }
        
        if (direction === 'greater') {
            currentMin.current = currentGuess;
        }

        const result = genrateRandomBetween(currentMin.current, currentMax.current, props.selectedNumber);
        setCurrentGuess(result);
    }
    
    return (
        <View style={styles.guessScreenContainer}>
            <Text>Opponent's Guess</Text>
            <View style={styles.guessNumberText}>
                <Text>{currentGuess}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Lower' onPress={() => onJudgeDirection('lower')}/>
                <Button title='Greater' onPress={() => onJudgeDirection('greater')}/>
                {/* <Button title='Close' onPress={() =>　props.closeGuessScreen(false)} /> */}
            </View>
            {/* add element to apply Dimensions and platform api to show something*/}
            <View style={{alignContent: 'center'}}>
                <Text style={{color: '#000', fontSize: 14,}}>Show Device Details:</Text>
                <Text style={{color: '#000', fontSize: 14,}}>System:{Platform.OS}</Text>
                <Text style={{color: '#000', fontSize: 14,}}>Width Dimensions:{currentWidth}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    guessScreenContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
        // justifyContent: 'center',
    },
    guessNumberText: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#2196f3',
        alignItems: 'center',
        padding: 10,
        marginVertical: 20,
    },
    buttonContainer: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default GuessScreen;