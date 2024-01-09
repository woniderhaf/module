import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabStackList } from './RootTabStackList';
import MainScreen from '../screens/Main/MainScreen';
import LibraryScreen from '../screens/Library/LibraryScreen';
import { useAppSelector } from '../store/hooks';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator<RootTabStackList>();
  const { color, backgroundColor } = useAppSelector(state => state.settings);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: color,
        headerStyle: {
          backgroundColor,
        },
        tabBarStyle: {
          backgroundColor,
        },
      }}>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} options={{}} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
