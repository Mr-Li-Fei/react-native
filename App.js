import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';

import MyApp from './components/MyApp';
import Settings from './components/Settings';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) =>  ({
            //headerShown: false, // 设置底部Tab.Screen 的header不显示
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if(route.name === 'My') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
              } else if(route.name === 'Settings') {
                iconName = focused ? 'list' : 'list-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
            headerShown: false,
        })}
      >
        <Tab.Screen name='My' component={MyApp} options={{tabBarBadge: 4} }></Tab.Screen>
        <Tab.Screen
          name='Settings' 
          component={Settings} 
          options={{
            headerStyle: {backgroundColor: '#f4511e'}, 
            headerTintColor: '#fff',
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create();
