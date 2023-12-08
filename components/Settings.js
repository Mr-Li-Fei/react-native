import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawer from './Drawer';

const SettingsStack = createNativeStackNavigator();

function Setting({ navigation }) {
  return (
    <View>
      <Text>Here is the Settings Page.</Text>
      <Button title="Go to Drawer" onPress={() => { navigation.navigate('Drawer') }}></Button>
    </View>
  )
}

function Settings({ navigation }) {
    return (
      <SettingsStack.Navigator screenOptions={{...HeaderStyle}}>
        <SettingsStack.Screen name='Setting' component={Setting}/>
        <SettingsStack.Screen 
          name='Drawer' 
          component={Drawer} 
          options={{
            headerShown: false,
          }}/>
      </SettingsStack.Navigator>
    )
}

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


export default Settings;
  
const styles = StyleSheet.create({})