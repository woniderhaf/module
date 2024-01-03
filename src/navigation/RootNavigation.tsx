import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Main from '../screens/Main/MainScreen';
import LibraryScreen from '../screens/Library/LibraryScreen';
import { RootStackParamList } from './RootStackParamList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const RootNavigation = () => {

  const Stack = createNativeStackNavigator<RootStackParamList>()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tabs' screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name='Tabs'
          component={TabNavigation}
        />
        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default RootNavigation