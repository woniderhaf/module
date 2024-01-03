

import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootTabStackList } from './RootTabStackList'
import MainScreen from '../screens/Main/MainScreen'
import LibraryScreen from '../screens/Library/LibraryScreen'

const TabNavigation = () => {
  const Tab = createBottomTabNavigator<RootTabStackList>()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name='Main' component={MainScreen} />
      <Tab.Screen name='Library' component={LibraryScreen} options={{}} />
    </Tab.Navigator>
  )
}

export default TabNavigation