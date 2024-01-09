import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../screens/Main/MainScreen';
import LibraryScreen from '../screens/Library/LibraryScreen';
import { RootStackParamList } from './RootStackParamList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { View, useColorScheme } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleSchema, toggleSystemSchema } from '../store/settings.slice';
import LoginScreen from '../screens/Login/LoginScreen';
import CreateAccount from '../screens/CreateAccrount/CreateAccount';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const schema = useColorScheme();
  const dispatch = useAppDispatch();
  const { backgroundColor } = useAppSelector(state => state.settings);
  useEffect(() => {
    if (schema) {
      dispatch(toggleSystemSchema(schema));
    }
  }, [schema]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerStyle: { backgroundColor },
          headerTransparent: true,
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen
          name="Tabs"
          options={{ headerShown: false }}
          component={TabNavigation}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
