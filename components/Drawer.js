import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigator = createDrawerNavigator();

function DrawerHome() {
    return (
        <View>
            <Text> here is the DrawerHome</Text>
        </View>
    )
}

function DrawerSettings() {
    return (
        <View>
            <Text> here is the DrawerSettings</Text>
        </View>
    )
}

const Drawer = () => {
  return (
    <DrawerNavigator.Navigator
        screenOptions={{
            // headerShown: false,
            ...HeaderStyle
        }}
    >
      <DrawerNavigator.Screen 
        name="DrawerHome"  
        component={DrawerHome} 
        // 设置Drawer 页面的样式...
        options={{drawerStyle: {backgroundColor: 'gold'}}}
      />
      <DrawerNavigator.Screen name="DrawerSettings" component={DrawerSettings} />
    </DrawerNavigator.Navigator>
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

export default Drawer

const styles = StyleSheet.create({})