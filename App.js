import React from 'react';
import { StyleSheet, Image, View, Text, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './components/Home';
import Details from './components/Details';
import PageWithHeaderTitle from './components/PageWithHeaderTitle';
// import InitPage from './components/InitPage';

const Stack = createNativeStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

function LogoTitle() {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image
        style={{width: 50, height: 50}}
        source={require('./asserts/image/Doraemon.jpg')}
      />
      <Text>哆啦A梦</Text>
    </View>
  );
}

const App = () => {
  const someData = {
    id: 'Home-feifei',
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
      // 抽离导航头部通用设置， 不用在每个Screen 的options中设置
        screenOptions={{...HeaderStyle}}
      >
        <Stack.Screen name="Home">
          {/* 可以传递一些除props 以外的一些自定义数据 */}
          { (props) => <Home {...props} {...someData}></Home>}
        </Stack.Screen>
        <Stack.Screen 
          name="Details" 
          component={Details} 
          options={{title: 'Detail'}}
          // 定义初始化的Params
          initialParams={{id: 'initDetails'}}
        />
        <Stack.Screen 
          name='HeaderTitle' 
          component={PageWithHeaderTitle}
          options={{
            headerTitle: () =>　<LogoTitle />,
            headerRight: () => (
              <Button
                onPress={ () => alert('This is a Button!')}
                title='Info'
                color='color'
              />
            )
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const HeaderStyle = {
  // 有三个关键属性配置Header样式
  // 页头背景颜色
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  // the color of back icon and header words 
  headerTintColor: '#fff',
  // 自定义Text相关样式
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

const styles = StyleSheet.create();
